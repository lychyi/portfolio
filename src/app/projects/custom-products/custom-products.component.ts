import { Component, OnInit } from '@angular/core';
import { FolioDataService } from '../../folio-data.service';

@Component({
  selector: 'app-custom-products',
  templateUrl: './custom-products.component.html',
  styleUrls: ['../../shared-styles/project-page-styles.scss', './custom-products.component.scss']
})
export class CustomProductsComponent implements OnInit {
  title: string = '';
  imgSrc: string;

  constructor(private folioDataService: FolioDataService) { }

  ngOnInit() {
    this.title = this.folioDataService.getFolioItemById(2).title;
    this.imgSrc = this.folioDataService.getFolioItemById(2).imgSrc;
  }

}
