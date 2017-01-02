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
        routeLink: 'custom-products'
      },
      {
        id: 3,
        title: 'Crafting a design system at Applied Genomics',
        imgSrc: 'design-traits-logo-bare.svg',
        themeClass: 'icy-water',
        routeLink: 'design-system'
      },
      {
        id: 4,
        title: 'Multi-hued color palettes for data visualizations',
        imgSrc: 'color-data-viz.svg',
        themeClass: 'clean-laundry',
        routeLink: 'colors-for-data-visualizations'
      },
      {
        id: 5,
        title: 'Component Driven Design with Polymer',
        imgSrc: 'polymer-logo.svg',
        themeClass: 'slate-60',
        routeLink: 'polymer-elements'
      },
    ];

    return mockData;
  }

  getFolioItemById(id: number) {
    return this.getFolioData().find((item) => { return item.id === id; });
  }
}
