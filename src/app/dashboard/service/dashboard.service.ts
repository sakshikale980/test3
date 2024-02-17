import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public cartItemList: any =[]
  public dashboardtList= new BehaviorSubject<any>([])
  selectedItem: any;
 

  constructor() { }

  getData(){
    return this.dashboardtList.asObservable();
    
    }
    setdashboard(dashboard: any){
      this.cartItemList.push(...dashboard);
      this .dashboardtList.next(dashboard);

    }
    addtoCart(cart : any){
      this.cartItemList.push(cart);
      this.dashboardtList.next(this.cartItemList);
      this.getTotalPrice();
      console.log(this.cartItemList)

    }
    getTotalPrice(){
      let grandTotal= 0;
      this.cartItemList.map((a:any)=>{
        grandTotal += a.total;
      })

    }
    removeCartItem(product: any){
      this.cartItemList.map((a:any, index:any)=>{
       if(product.id=== a.id){
        this.cartItemList.splice(index,1)
       }
      })

    }
    removeAllCart(){
      this.cartItemList = []
      this.dashboardtList.next(this.cartItemList);
    }
  }


