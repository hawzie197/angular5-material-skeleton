import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../../internals/shared.module";

const routes = [
    {
        path     : 'admin',
        component: AdminComponent
    }
];

@NgModule({

  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],

  declarations: [
    AdminComponent
  ],

  exports: [
    AdminComponent
  ]

})
export class AdminModule { }
