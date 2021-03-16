import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EqualsFormControlsDemoComponent } from './equals-form-controls-demo.component';

const routes: Routes = [
  {path: '', component: EqualsFormControlsDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EqualsFormControlsDemoRoutingModule { }
