import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugDemoComponent } from './form-debug-demo.component';
import { FormDebugDemoRoutingModule } from './form-debug-demo-routing.module';
import { FormDebugModule } from 'projects/ajlng/src/lib/form-debug/public-api';

@NgModule({
  declarations: [
    FormDebugDemoComponent
  ],
  imports: [
    CommonModule,
    FormDebugDemoRoutingModule,
    FormDebugModule
  ]
})
export class FormDebugDemoModule { }
