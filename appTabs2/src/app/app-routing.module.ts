import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdComponent } from './ad/ad.component';
import { UserAdsComponent } from './UserAds/UserAds.component';
import { UserAdsValideComponent } from './userAdsValide/userAdsValide.component';
import { UserAdsVenduComponent } from './userAdsVendu/userAdsVendu.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'createad',
    component: AdComponent
  },
  {
    path: 'ads',
    component: UserAdsComponent
  },
  {
    path: 'valid_ads',
    component: UserAdsValideComponent
  },
  {
    path: 'voiture_vendu',
    component: UserAdsVenduComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
