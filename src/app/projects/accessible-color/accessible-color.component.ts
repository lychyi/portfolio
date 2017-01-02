import { Component, OnInit } from '@angular/core';
import { FolioDataService } from '../../folio-data.service';

@Component({
  selector: 'app-accessible-color',
  templateUrl: './accessible-color.component.html',
  styleUrls: ['../../shared-styles/project-page-styles.scss', './accessible-color.component.scss']
})
export class AccessibleColorComponent implements OnInit {
  title: string = '';
  ilmnColors: string[] = [
    '#14D4D1',
    '#8FA2F4',
    '#8A64C1',
    '#C6429D',
    '#8995A5',
    '#F5B500',
    '#E76F73',
    '#27AA36',
  ];

  shadesOfTeal = [
    { shade: 5, color: '#CBFAF9' }, 
    { shade: 10, color: '#80F3F1' }, 
    { shade: 20, color: '#14D4D1' }, 
    { shade: 30, color: '#11B8B5' }, 
    { shade: 40, color: '#0EA4A2' }, 
    { shade: 50, color: '#0A8482' }, 
    { shade: 60, color: '#076362' }, 
    { shade: 70, color: '#064E4D' }, 
    { shade: 80, color: '#043A39' }, 
    { shade: 90, color: '#032C2B' }, 
  ];

  shadesOfError = [
    { shade: 5,  color: '#FCEEEE' },
    { shade: 10, color: '#F9DADB' },
    { shade: 20, color: '#F2AFB1' },
    { shade: 30, color: '#EB8B8E' },
    { shade: 40, color: '#E76F73' },
    { shade: 50, color: '#DE3439' },
    { shade: 60, color: '#AE1B1F' },
    { shade: 70, color: '#8B1518' },
    { shade: 80, color: '#681013' },
    { shade: 90, color: '#500C0E' }
  ];

  shadesOfPurple = [
    { shade: 5 , color: '#F4F0F9' },
    { shade: 10, color: '#E6DEF2' },
    { shade: 20, color: '#CAB9E3' },
    { shade: 30, color: '#B39BD7' },
    { shade: 40, color: '#A487CE' },
    { shade: 50, color: '#8A64C1' },
    { shade: 60, color: '#6B43A5' },
    { shade: 70, color: '#553583' },
    { shade: 80, color: '#3E285F' },
    { shade: 90, color: '#301D49' }
  ];

  shadesOfGrey = [
    { shade: 5 , color: '#F0F0F0' },
    { shade: 10, color: '#E0E0E0' },
    { shade: 20, color: '#BFBFBF' },
    { shade: 30, color: '#A5A5A5' },
    { shade: 40, color: '#939393' },
    { shade: 50, color: '#767676' },
    { shade: 60, color: '#585858' },
    { shade: 70, color: '#464646' },
    { shade: 80, color: '#333333' },
    { shade: 90, color: '#262626' },
  ];

  constructor(private folioDataService: FolioDataService) { }

  ngOnInit() {
    this.title = this.getTitleFromFolio();
  }

  getTitleFromFolio() {
    let targetId = 1; // Id of this folio's content
    let folioData: any[] = this.folioDataService.getFolioData();
    return folioData.find((item) => { return item.id === 1; }).title;
  }

}
