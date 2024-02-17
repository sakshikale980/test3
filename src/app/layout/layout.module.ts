import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { CustomerComponent } from './components/customer/customer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule}from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent,
    SidebarComponent,
    FooterComponent,
    ProductComponent,
    OrderComponent,
    CustomerComponent,
    HomeComponent
    
    
   
  

    

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    DashboardComponent
   
  
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
