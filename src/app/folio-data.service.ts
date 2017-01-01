import { Injectable } from '@angular/core';

@Injectable()
export class FolioDataService {

  constructor() { }

  getFolioData(): any[] {
    let mockData = [
      {
        id: 1,
        title: 'An accessible color system for web user interfaces',
        imgSrc: 'color-logo.svg',
        themeClass: 'slate-60',
        routeLink: 'accessible-color'
      },
      {
        id: 2,
        title: 'User interface design and development for custom products at Illumina',
        imgSrc: '96xt-beadchip-icon.svg',
        themeClass: 'cool-mint',
        routeLink: 'accessible-color'
      },
      {
        id: 3,
        title: 'Crafting a design system at Applied Genomics',
        imgSrc: 'design-traits-logo-bare.svg',
        themeClass: 'icy-water',
        routeLink: 'accessible-color'
      },
      {
        id: 4,
        title: 'Multi-hued color palettes for data visualizations',
        imgSrc: 'color-data-viz.svg',
        themeClass: 'clean-laundry',
        routeLink: 'accessible-color'
      },
      {
        id: 5,
        title: 'Polymer Elements Best Practices',
        imgSrc: 'polymer-logo.svg',
        themeClass: 'slate-60',
        routeLink: 'accessible-color'
      },
    ];

    return mockData;
  }
}
