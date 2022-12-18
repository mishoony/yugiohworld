import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppInterceptroProvider } from './app-interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeatureModule } from './feature/feature.module';

import { AutenticateComponent } from './autenticate/autenticate.component';

@NgModule({
  declarations: [
    AppComponent,
    AutenticateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeatureModule
  ],
  providers: [AppInterceptroProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
