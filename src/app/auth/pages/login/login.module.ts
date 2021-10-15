import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { LoginHeaderComponent } from './components/login-header/login-header.component';
import { LoginFooterComponent } from './components/login-footer/login-footer.component';
import { LoginContentComponent } from './components/login-content/login-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [LoginPage, LoginHeaderComponent, LoginFooterComponent, LoginContentComponent]
})
export class LoginPageModule {}
