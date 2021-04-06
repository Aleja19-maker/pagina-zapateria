import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//librerias primeNG
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {MenuItem} from 'primeng/api';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    AccordionModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
