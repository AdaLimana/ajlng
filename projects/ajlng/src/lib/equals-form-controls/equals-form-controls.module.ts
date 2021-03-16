import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EqualsFormControlsDirective } from './equals-form-controls.directive';



@NgModule({
  declarations: [EqualsFormControlsDirective],
  imports: [
    CommonModule
  ],
  exports: [
    EqualsFormControlsDirective
  ]
})
export class EqualsFormControlsModule { }
