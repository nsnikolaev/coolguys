export const scrollTo = (to: string, containerId: string) => {
  const container = document.getElementById(containerId);
  const element: Element = document.getElementsByClassName(`anchor-${to}`)[0];
  if (!element || !container) {
    return;
  }
  const top = (element as HTMLElement).offsetTop || 0;
  container.scrollTo(0, top);
}
