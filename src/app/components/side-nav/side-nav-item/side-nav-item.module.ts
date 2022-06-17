import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavItemComponent } from './side-nav-item.component';
import { MaterialSharedModule } from '../../../@es/shared/material-shared.module';



@NgModule({
  declarations: [SideNavItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialSharedModule
  ],
  exports:[
    SideNavItemComponent
  ]
})
export class SideNavItemModule { }
