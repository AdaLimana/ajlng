import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EqualsFormControlsDemoRoutingModule } from './equals-form-controls-demo-routing.module';
import { EqualsFormControlsDemoComponent } from './equals-form-controls-demo.component';
import { EqualsFormControlsModule } from 'projects/ajlng/src/lib/equals-form-controls/equals-form-controls.module';
import { InputErrorMessageModule } from 'projects/ajlng/src/lib/input-error-message/public-api';


@NgModule({
  declarations: [
    EqualsFormControlsDemoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EqualsFormControlsDemoRoutingModule,
    EqualsFormControlsModule,
    InputErrorMessageModule,
  ]
})
export class EqualsFormControlsDemoModule { }
