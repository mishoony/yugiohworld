import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsComponent } from './details/details.component';
import { CrateProductComponent } from './crate-product/crate-product.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GalleryComponent,
    DetailsComponent,
    CrateProductComponent,
    ProductListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ 
    GalleryComponent,
    DetailsComponent,
    CrateProductComponent,
    ProductListItemComponent]
})
export class ProductModule { }
