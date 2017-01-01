import { Component, OnInit, Input, HostListener, ElementRef, ViewChild, ContentChildren} from '@angular/core';

@Component({
  selector: 'app-folio-feature-card',
  templateUrl: './folio-feature-card.component.html',
  styleUrls: ['./folio-feature-card.component.scss']
})
export class FolioFeatureCardComponent implements OnInit {
  @Input() folioTitle: string = 'Default Card Title';
  @ViewChild('cardContent') cardContent: ElementRef;
  hovered: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter') onMouseEnter() {
    let children = this.cardContent.nativeElement.children;
    for (let child of children) {
      child.classList.add('hovered');
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    let children = this.cardContent.nativeElement.children;
    for (let child of children) {
      child.classList.remove('hovered');
    }
  }
}
