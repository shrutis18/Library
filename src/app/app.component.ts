import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  template :`
<h1>
</h1>
  <nav>
  	<a routerLink ="/home" routerLinkActive ="active">Home </a>
  	<a routerLink ="/register" routerLinkActive ="active">Register </a>
    <a routerLink ="/login" routerLinkActive ="active">Login </a>
   </nav>
  <router-outlet></router-outlet>


  `
})
export class AppComponent {
  title = 'app works!';
}
