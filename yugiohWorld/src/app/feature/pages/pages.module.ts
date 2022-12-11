import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AbotAsComponent } from './abot-as/abot-as.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    AbotAsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule
    
  ],
  exports : [
     HomeComponent,
    AbotAsComponent]
})
export class PagesModule { }
