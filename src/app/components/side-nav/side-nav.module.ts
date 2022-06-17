import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav.component';
import { MaterialSharedModule } from '../../@es/shared/material-shared.module';
import { ScrollbarModule } from '../../@es/shared/scrollbar/scrollbar.module';
import { SideNavItemModule } from './side-nav-item/side-nav-item.module';
import { SideNavMobileComponent } from './side-nav-mobile/side-nav-mobile.component';

@NgModule({
  declarations: [SideNavComponent, SideNavMobileComponent],
  imports: [
    CommonModule,
    MaterialSharedModule,
    ScrollbarModule,
    SideNavItemModule
  ],
  exports:[
    SideNavComponent,
    SideNavMobileComponent
  ]
})
export class SideNavModule { }
