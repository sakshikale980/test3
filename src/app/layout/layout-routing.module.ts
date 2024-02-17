import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
 
  {path: '',component:LayoutComponent,children:[
  {path : 'dashboard', component:DashboardComponent},
  { path: 'home', component:HomeComponent},
  { path: 'cart', component:CartComponent },
  { path: 'product', component:ProductComponent },
  { path:  'orders', component:OrderComponent },
  { path: 'customer', component:CustomerComponent }


]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
