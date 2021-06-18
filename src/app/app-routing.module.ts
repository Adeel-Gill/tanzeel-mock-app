import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './main-module/admin-layout/admin-layout.component';
// import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'admin',
    component:AdminLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
