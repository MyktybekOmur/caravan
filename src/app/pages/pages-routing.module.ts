import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampComponent } from './camp/camp/camp.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';

import { HomeComponent } from './home/home/home.component';
import { MainComponent } from './main/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'camp', component: CampComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
export const routingAdminComponents = [
  MainComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  CampComponent,
];
