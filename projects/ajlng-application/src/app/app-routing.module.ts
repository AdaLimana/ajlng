import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'form-debug', loadChildren: () => import("./components/form-debug/form-debug-demo.module").then(m => m.FormDebugDemoModule)},
            {path: 'input-error-message', loadChildren: () => import("./components/input-error-message/input-error-message-demo.module").then(m => m.InputErrorMessageDemoModule)},
            {path: 'is-required', loadChildren: () => import("./components/is-required/is-required-demo.module").then(m => m.IsRequiredDemoModule)},
            {path: 'equals-form-controls', loadChildren: () => import("./components/equals-form-controls/equals-form-controls-demo.module").then(m => m.EqualsFormControlsDemoModule)},
        ]),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
