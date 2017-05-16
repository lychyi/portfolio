import { Component, OnInit } from '@angular/core';

// Animations
import { fadeInAnimation } from 'app/_animations/index';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [ fadeInAnimation ],
  host: { '[@fadeInAnimation]': '' }
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
