import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsComponent } from './details/details.component';
import { CrateProductComponent } from './crate-product/crate-product.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';



@NgModule({
  declarations: [
    GalleryComponent,
    DetailsComponent,
    CrateProductComponent,
    ProductListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ 
    GalleryComponent,
    DetailsComponent,
    CrateProductComponent,
    ProductListItemComponent]
})
export class ProductModule { }
