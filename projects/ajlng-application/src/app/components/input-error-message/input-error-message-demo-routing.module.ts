import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputErrorMessageDemoComponent } from './input-error-message-demo.component';

const routes: Routes = [
  {path: '', component: InputErrorMessageDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputErrorMessageDemoRoutingModule { }
