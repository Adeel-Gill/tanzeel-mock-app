import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
// import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'profile',
    loadChildren:() =>import('./profile/profile.module')
    .then(mod=>mod.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
