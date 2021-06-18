import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component'; 
// import { UiModuleModule } from './ui-module/ui-module.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiModuleModule } from './ui-module/ui-module.module';
@NgModule({
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MainModuleRoutingModule,
    UiModuleModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule 
  ]
})
export class MainModuleModule { }
