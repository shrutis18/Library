import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from '../Home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {LoginComponent} from '../Login/login.component';
//import { MaterialModule } from '@angular/material';
//import { DatePickerModule } from 'ng2-datepicker';

const appRoutes: Routes =[
	{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
    },
	
	{
		path:'home',
		component: HomeComponent
	},

	{
		path:'contact',
		component: ContactComponent
	},
	{

	    path:'login',
	    component: LoginComponent
	}
	
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

