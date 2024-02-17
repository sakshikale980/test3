import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
[x: string]: any;
menuvariable: any;
menuVariable:boolean = false;

openMenu() {
  this.menuvariable =! this.menuvariable;
throw new Error('Method not implemented.');
}

}
