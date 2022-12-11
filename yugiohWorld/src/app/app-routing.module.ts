import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbotAsComponent } from './feature/pages/abot-as/abot-as.component';
import { HomeComponent } from './feature/pages/home/home.component';
import { CrateProductComponent } from './feature/product/crate-product/crate-product.component';
import { DetailsComponent } from './feature/product/details/details.component';
import { GalleryComponent } from './feature/product/gallery/gallery.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {

    path: 'allProducts',
    component: GalleryComponent,
    children: [
      {
        path: 'ditails/:id',
        component: DetailsComponent
      }
    ]

  },
  {
    path: 'aboutAs',
    component: AbotAsComponent
  },
  {
    path: 'createProduct',
    component: CrateProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
