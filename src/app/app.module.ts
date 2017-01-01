import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FolioFeatureCardComponent } from './folio-feature-card/folio-feature-card.component';
import { HeaderComponent } from './header/header.component';
import { FolioAreaComponent } from './folio-area/folio-area.component';
import { FolioDataService } from './folio-data.service';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { AccessibleColorComponent } from './projects/accessible-color/accessible-color.component';

const appRoutes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/accessible-color', component: AccessibleColorComponent },
  { path: '',   redirectTo: '/projects', pathMatch: 'full' },
];

@NgModule({
  declarations: [
  AppComponent,
    FolioFeatureCardComponent,
    HeaderComponent,
    FolioAreaComponent,
    FooterComponent,
    ProjectsComponent,
    AccessibleColorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FolioDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
