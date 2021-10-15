import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentSharedOnAuthComponent } from './component-shared-on-auth.component';

@NgModule({
  declarations: [ComponentSharedOnAuthComponent],
  imports: [
    CommonModule
  ],
  exports: [ComponentSharedOnAuthComponent],
})
export class ComponentSharedOnAuthModule { }
