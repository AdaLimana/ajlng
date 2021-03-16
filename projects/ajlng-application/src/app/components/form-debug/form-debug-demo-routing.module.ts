import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDebugDemoComponent } from './form-debug-demo.component';

const routes: Routes = [
  {path: '', component: FormDebugDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormDebugDemoRoutingModule { }
