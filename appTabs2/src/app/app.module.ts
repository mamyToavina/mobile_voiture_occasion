import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationModule } from './registration/registration.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdComponent } from './ad/ad.component';
import { AdModule } from './ad/ad.module';
import { UserAdsComponent } from './UserAds/UserAds.component';
import { UserAdsValideComponent } from './userAdsValide/userAdsValide.component';
import { UserAdsVenduComponent } from './userAdsVendu/userAdsVendu.component';

@NgModule({
  declarations: [					AppComponent,
      LoginComponent,
      UserAdsComponent,
      UserAdsValideComponent,
      UserAdsVenduComponent
   ],
  imports: [
     BrowserModule,
     IonicModule,
     IonicModule.forRoot(),
     FormsModule, ReactiveFormsModule,
     RegistrationModule,
     AdModule,
     HttpClientModule,
     AppRoutingModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent,RegistrationComponent,AdComponent],
})
export class AppModule {}
