const siteHeader = document.querySelector<HTMLElement>('.site-header');
const sectionLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.section-nav-item'));
const sections = Array.from(document.querySelectorAll<HTMLElement>('.content-inner > section'));
const headerMenu = document.querySelector<HTMLDetailsElement>('.header-menu');
let previousScrollTop = 0;
let scrollFrame = 0;

const updateScrollState = () => {
  scrollFrame = 0;
  if (!siteHeader) return;

  const currentScrollTop = window.scrollY;
  const viewportHeight = window.innerHeight;
  const readingLine = Math.min(180, viewportHeight * 0.28);
  let activeSection = sections[0]?.id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= readingLine) activeSection = section.id;
  }
  const scrollHeight = document.documentElement.scrollHeight;
  if (currentScrollTop > 0 && currentScrollTop + viewportHeight >= scrollHeight - 4) {
    activeSection = sections.at(-1)?.id;
  }
  for (const link of sectionLinks) {
    const active = link.hash === `#${activeSection}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }

  const movingDown = currentScrollTop > previousScrollTop + 2;
  const movingUp = currentScrollTop < previousScrollTop - 2;
  if (currentScrollTop < 64 || movingUp || headerMenu?.open || siteHeader.contains(document.activeElement)) {
    siteHeader.classList.remove('is-hidden');
  } else if (movingDown) {
    siteHeader.classList.add('is-hidden');
  }
  previousScrollTop = currentScrollTop;
};

const scheduleScrollUpdate = () => {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollState);
};
window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
window.addEventListener('resize', scheduleScrollUpdate);
document.fonts.ready.then(scheduleScrollUpdate);
updateScrollState();
