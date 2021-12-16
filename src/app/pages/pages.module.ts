import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  PagesRoutingModule,
  routingAdminComponents,
} from './pages-routing.module';
import { MainComponent } from './main/main/main.component';
import { CaravanComponent } from './caravan/caravan/caravan.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';

@NgModule({
  declarations: [MainComponent, routingAdminComponents, CaravanComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
