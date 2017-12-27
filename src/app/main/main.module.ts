import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../core/shared.module';
import { ContentComponent } from './content/content.component';
import { MainComponent } from './main.component';

@NgModule({

  imports: [
    RouterModule,
    SharedModule
  ],

  declarations: [
    MainComponent,
    ContentComponent
  ],

  exports: [
    MainComponent
  ]

})
export class MainModule { }
