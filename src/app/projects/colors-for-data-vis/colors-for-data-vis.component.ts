import { Component, OnInit } from '@angular/core';
import { FolioDataService } from '../../folio-data.service';

@Component({
  selector: 'app-colors-for-data-vis',
  templateUrl: './colors-for-data-vis.component.html',
  styleUrls: ['../../shared-styles/project-page-styles.scss', './colors-for-data-vis.component.scss']
})
export class ColorsForDataVisComponent implements OnInit {
  title: string = '';
  imgSrc: string;

  constructor(private folioDataService: FolioDataService) { }

  ngOnInit() {
    this.title = this.folioDataService.getFolioItemById(4).title;
    this.imgSrc = this.folioDataService.getFolioItemById(4).imgSrc;
  }

}
