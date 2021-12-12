import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  PagesRoutingModule,
  routingAdminComponents,
} from './pages-routing.module';
import { MainComponent } from './main/main/main.component';

@NgModule({
  declarations: [MainComponent, routingAdminComponents],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
