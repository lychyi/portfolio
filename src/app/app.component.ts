import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showHomeButton = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      if (this.router.url === '/projects') {
        // Hide the home button because we are already 'home'
        this.showHomeButton = false;
        return;
      } else {
        this.showHomeButton = true;
        window.scroll(0, 0);
      }
    });
  }
}
