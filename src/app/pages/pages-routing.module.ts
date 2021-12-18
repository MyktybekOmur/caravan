import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampComponent } from './camp/camp/camp.component';
import { CaravanComponent } from './caravan/caravan/caravan.component';
import { CartComponent } from './cart/cart/cart.component';
import { FinishComponent } from './finish/finish/finish.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';

import { HomeComponent } from './home/home/home.component';
import { MainComponent } from './main/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: CaravanComponent },
      { path: 'caravan', component: HomeComponent },
      { path: 'camp', component: CampComponent },
      { path: 'cart', component: CartComponent },
      { path: 'finish', component: FinishComponent },
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
  CartComponent,
  FinishComponent,
];
