import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HeroComponent} from './components/hero/hero.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {
    path: 'login',
   component: LoginComponent,
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
