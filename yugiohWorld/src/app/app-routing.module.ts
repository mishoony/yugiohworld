import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbotAsComponent } from './feature/pages/abot-as/abot-as.component';
import { HomeComponent } from './feature/pages/home/home.component';
import { GalleryComponent } from './feature/product/gallery/gallery.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'allProducts',
    component: GalleryComponent
  },
  {
    path:'aboutAs',
    component: AbotAsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
