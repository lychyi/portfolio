import { Component, OnInit } from '@angular/core';
import { FolioDataService } from '../../folio-data.service';

@Component({
  selector: 'app-design-system',
  templateUrl: './design-system.component.html',
  styleUrls: ['../../shared-styles/project-page-styles.scss', './design-system.component.scss']
})
export class DesignSystemComponent implements OnInit {
  title: string = '';
  imgSrc: string;

  constructor(private folioDataService: FolioDataService) { }

  ngOnInit() {
    this.title = this.folioDataService.getFolioItemById(3).title;
    this.imgSrc = this.folioDataService.getFolioItemById(3).imgSrc;
  }

}
