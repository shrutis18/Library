import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from '../Home/home.component';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../Login/login.component';
import { MaterialModule } from '@angular/material';
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
		path:'register',
		component: RegisterComponent
	},
	{

	    path:'login',
	    component: LoginComponent
	},
   
	
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

