import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'form-debug', loadChildren: () => import("./components/form-debug/form-debug-demo.module").then(m => m.FormDebugDemoModule)},
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
