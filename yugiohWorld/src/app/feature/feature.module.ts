import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AbotAsComponent } from './pages/abot-as/abot-as.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductModule } from './product/product.module';
import { CrateProductComponent } from './product/crate-product/crate-product.component';
import { DetailsComponent } from './product/details/details.component';
import { GalleryComponent } from './product/gallery/gallery.component';
import { ProductListItemComponent } from './product/product-list-item/product-list-item.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesModule,
    AuthModule,
    ProductModule
  ],
  exports : [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AbotAsComponent,
    GalleryComponent,
    DetailsComponent,
    CrateProductComponent,
    ProductListItemComponent
  ]
})
export class FeatureModule { }
