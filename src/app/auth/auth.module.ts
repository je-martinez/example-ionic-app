import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageModule } from './pages/login/login.module';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    //Pages
    LoginPageModule
  ]
})
export class AuthModule { }
