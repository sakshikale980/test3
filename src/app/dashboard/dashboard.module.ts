import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CartComponent } from '../layout/components/cart/cart.component';
@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CartComponent
  ]
})
export class DashboardModule { }