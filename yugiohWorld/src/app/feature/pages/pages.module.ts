import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AbotAsComponent } from './abot-as/abot-as.component';



@NgModule({
  declarations: [
    HomeComponent,
    AbotAsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
     HomeComponent,
    AbotAsComponent]
})
export class PagesModule { }
