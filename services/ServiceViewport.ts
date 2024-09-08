type ViewportTitle = 'PHONE' | 'SMARTPHONE' | 'TABLED' | 'DESKTOP';

export interface Viewport {
  widthMax: number;
  title: ViewportTitle;
}

export const viewports: Viewport[] = [
  { widthMax: 100000, title: 'DESKTOP' },
  { widthMax: 1440, title: 'TABLED' },
  { widthMax: 744, title: 'SMARTPHONE' },
  { widthMax: 428, title: 'PHONE' },
  ];

export const viewportByWidth = (width: number): ViewportTitle => {
  let title: ViewportTitle | null = null;
  for (const viewport of viewports) {
    if (width < viewport.widthMax) {
      title = viewport.title;
    }
  }
  return title || 'DESKTOP';
}
