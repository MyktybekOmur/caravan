import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  PagesRoutingModule,
  routingAdminComponents,
} from './pages-routing.module';
import { MainComponent } from './main/main/main.component';
import { CaravanComponent } from './caravan/caravan/caravan.component';

import { CampComponent } from './camp/camp/camp.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart/cart.component';
import { FinishComponent } from './finish/finish/finish.component';
import { SearchComponent } from './search/search/search.component';

@NgModule({
  declarations: [
    MainComponent,
    routingAdminComponents,
    CaravanComponent,
    CampComponent,
    CartComponent,
    FinishComponent,
    SearchComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, FormsModule],
})
export class PagesModule {}
