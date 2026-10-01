import { getSecret } from 'astro:env/server';

export type ContributionLevel =
  | 'NONE'
  | 'FIRST_QUARTILE'
  | 'SECOND_QUARTILE'
  | 'THIRD_QUARTILE'
  | 'FOURTH_QUARTILE';

export interface ContributionDay {
  date: string;
  weekday: number;
  contributionCount: number;
  contributionLevel: ContributionLevel;
}

export interface ContributionWeek {
  firstDay: string;
  contributionDays: ContributionDay[];
}

export interface ContributionCalendar {
  login: string;
  totalContributions: number;
  months: { firstDay: string; name: string }[];
  weeks: ContributionWeek[];
}

interface GitHubResponse {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar: Omit<ContributionCalendar, 'login'>;
      };
    };
  };
  errors?: { message: string }[];
}

const query = `
  query ContributionCalendar($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          months { firstDay name }
          weeks {
            firstDay
            contributionDays { date weekday contributionCount contributionLevel }
          }
        }
      }
    }
  }
`;

export async function getGitHubContributions(): Promise<ContributionCalendar | null> {
  const login = getSecret('GITHUB_USERNAME')?.trim();
  const token = getSecret('GITHUB_TOKEN')?.trim();
  if (!login || !token) return null;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables: { login } }),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) return null;
    const result = (await response.json()) as GitHubResponse;
    const collection = result.data?.user?.contributionsCollection;
    const calendar = collection?.contributionCalendar;
    if (
      result.errors?.length ||
      !collection ||
      !calendar ||
      !Number.isFinite(calendar.totalContributions) ||
      !Array.isArray(calendar.weeks) ||
      !Array.isArray(calendar.months)
    ) return null;

    return {
      login,
      ...calendar,
    };
  } catch {
    return null;
  }
}
