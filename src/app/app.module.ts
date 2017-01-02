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
import { CustomProductsComponent } from './projects/custom-products/custom-products.component';
import { DesignSystemComponent } from './projects/design-system/design-system.component';
import { ColorsForDataVisComponent } from './projects/colors-for-data-vis/colors-for-data-vis.component';
import { PolymerElementsComponent } from './projects/polymer-elements/polymer-elements.component';
import { CommunicationComponent } from './communication/communication.component';

const appRoutes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/accessible-color', component: AccessibleColorComponent },
  { path: 'projects/custom-products', component: CustomProductsComponent },
  { path: 'projects/design-system', component: DesignSystemComponent },
  { path: 'projects/colors-for-data-visualizations', component: ColorsForDataVisComponent },
  { path: 'projects/polymer-elements', component: PolymerElementsComponent },
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
    AccessibleColorComponent,
    CustomProductsComponent,
    DesignSystemComponent,
    ColorsForDataVisComponent,
    PolymerElementsComponent,
    CommunicationComponent
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
