import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../internals/shared.module';
import { ContentComponent } from './content/content.component';
import { MainComponent } from './main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({

  imports: [
    RouterModule,
    SharedModule
  ],

  declarations: [
    MainComponent,
    ContentComponent,
    NavbarComponent,
    SidenavComponent
  ],

  exports: [
    MainComponent
  ]

})
export class MainModule { }
