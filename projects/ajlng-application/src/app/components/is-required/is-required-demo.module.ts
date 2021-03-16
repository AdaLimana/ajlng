import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IsRequiredDemoRoutingModule } from './is-required-demo-routing.module';
import { IsRequiredDemoComponent } from './is-required-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IsRequiredModule } from 'projects/ajlng/src/lib/is-required/is-required.module';


@NgModule({
  declarations: [IsRequiredDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IsRequiredDemoRoutingModule,
    IsRequiredModule,
  ]
})
export class IsRequiredDemoModule { }
