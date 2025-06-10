import { Routes } from '@angular/router';
import {ConnexionComponent} from './login/connexion/connexion.component';
import {HomeComponent} from './home/home.component';
import {authGuard} from './shared/guard/auth.guard';

export const routes: Routes = [
  {path:"", component: ConnexionComponent},
  {path:"home", component: HomeComponent, canActivate:[authGuard]}
];
