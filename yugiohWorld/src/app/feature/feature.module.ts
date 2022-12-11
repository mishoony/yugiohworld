import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { ProductModule } from './product/product.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesModule,
    AuthModule,
    ProductModule
  ],
  exports : [
    PagesModule,
    AuthModule,
    ProductModule
  ]
})
export class FeatureModule { }
