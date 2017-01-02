import { Component, OnInit } from '@angular/core';
import { FolioDataService } from '../../folio-data.service';

@Component({
  selector: 'app-polymer-elements',
  templateUrl: './polymer-elements.component.html',
  styleUrls: ['../../shared-styles/project-page-styles.scss', './polymer-elements.component.scss']
})
export class PolymerElementsComponent implements OnInit {
  title: string = '';
  imgSrc: string;
  constructor(private folioDataService: FolioDataService) { }

  ngOnInit() {
    this.title = this.folioDataService.getFolioItemById(5).title;
    this.imgSrc = this.folioDataService.getFolioItemById(5).imgSrc;
  }

}
