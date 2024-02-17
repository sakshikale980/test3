import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, createComponent} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardService } from './service/dashboard.service';
import { CartComponent } from '../layout/components/cart/cart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  providers: [DashboardService],
  imports: [CommonModule, FormsModule, CartComponent]
})
export class DashboardComponent {
  isresponsive = true;
isResponsive: any;
  // dashboardList: any;
// addtocart(_t6: { imagePath: string; id: number; text: string; }) {
// throw new Error('Method not implemented.');
// }
// item: any;
//   dashboard: any;
//   cartService: any;


//   constructor(
//     private dashboardService: DashboardService  ) { }

//   ngOnInit():void {
//     this.dashboard.getdashboard()
//     .subscribe((res: any)=>{
//       this.dashboardList = res;

//       this.dashboardList.forEach((a:any) => {
//       Object.assign(a,{quantity:1,total:a.price});
//       });
//     })
//   }
//   addtocart(item: any){
//     this.cartService.addtoCart(Image);
//   }
// getData() {
   //   this.dashboardService.getData();
  // }

  constructor(private dashboardService:DashboardService) { }
  imageList = [
    { imagePath: "/assets/images/healthcare_icon.webp", id: 1, text: "Health & Personal Care" },
    { imagePath: "/assets/images/electronic images.avif",id: 2, text: "Upto 75 % off | Electronics"},
    { imagePath: "/assets/images/beuty images.avif" , id: 3 , text: "Only Rs.499|Your Beauty.Our Passion"},
    { imagePath: "/assets/images/furniture images.jpeg" , id: 4, text: "Upto 70% off | Curated Furniture"},
    { imagePath: "/assets/images/cloths images 2.jpg" , id: 5, text:"Upto 60% off | Styles for Men"},
    { imagePath: "/assets/images/toys_images.webp" ,id: 6, text:"Upto 20% off | New Arrival In Toys"},
   ]

item: any;
addToCart(item:any){
    console.log(item, "item")
    this.dashboardService.selectedItem=this.item;
    
  
}
}
