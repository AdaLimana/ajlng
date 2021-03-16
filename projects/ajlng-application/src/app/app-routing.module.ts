import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'form-debug', loadChildren: () => import("./components/form-debug/form-debug-demo.module").then(m => m.FormDebugDemoModule)},
            {path: 'input-error-message', loadChildren: () => import("./components/input-error-message/input-error-message-demo.module").then(m => m.InputErrorMessageDemoModule)},
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
