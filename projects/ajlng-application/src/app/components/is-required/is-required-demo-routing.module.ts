import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsRequiredDemoComponent } from './is-required-demo.component';

const routes: Routes = [
  {path: '', component: IsRequiredDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IsRequiredDemoRoutingModule { }
