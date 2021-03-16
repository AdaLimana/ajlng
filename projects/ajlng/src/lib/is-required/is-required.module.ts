import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsRequiredDirective } from './is-required.directive';



@NgModule({
  declarations: [IsRequiredDirective],
  imports: [
    CommonModule
  ],
  exports: [
    IsRequiredDirective
  ]

})
export class IsRequiredModule { }
