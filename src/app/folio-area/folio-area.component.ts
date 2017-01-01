import { Component, OnInit } from '@angular/core';
import { FolioDataService } from '../folio-data.service';

@Component({
  selector: 'app-folio-area',
  templateUrl: './folio-area.component.html',
  styleUrls: ['./folio-area.component.scss']
})
export class FolioAreaComponent implements OnInit {
  features = [];

  constructor(private folioDataService: FolioDataService) { }

  ngOnInit() {
    this.features = this.folioDataService.getFolioData();
  }
}
