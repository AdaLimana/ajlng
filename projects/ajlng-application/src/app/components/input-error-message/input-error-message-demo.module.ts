import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputErrorMessageDemoRoutingModule } from './input-error-message-demo-routing.module';
import { InputErrorMessageDemoComponent } from './input-error-message-demo.component';
import { InputErrorMessageModule } from 'projects/ajlng/src/lib/input-error-message/public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [InputErrorMessageDemoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputErrorMessageDemoRoutingModule,
    InputErrorMessageModule,
    InputTextModule
  ]
})
export class InputErrorMessageDemoModule { }
