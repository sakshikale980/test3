import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { DashboardService } from 'src/app/dashboard/service/dashboard.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true
})
export class CartComponent implements OnInit{
  @Input() item: any;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor(private DashboardService: DashboardService){ }
  ngOnChanges(change:SimpleChange): void{
    const item =this.DashboardService.selectedItem;
    console.log(item,"jjjjjjj")
  }


  ngOnInit(): void {
    console.log(this.item, "item")
  }

}
