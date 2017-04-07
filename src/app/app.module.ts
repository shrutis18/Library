import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';
import {AppRoutingModule} from './app.router.module';
import {HomeComponent} from '../Home/home.component';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../Login/login.component';
import { MaterialModule } from '@angular/material';
//import { DatePickerModule } from 'ng2-datepicker';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
     MaterialModule
    // DatePickerModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
