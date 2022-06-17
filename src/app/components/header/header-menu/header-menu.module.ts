import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialSharedModule } from '../../../@es/shared/material-shared.module';
import { HeaderMenuComponent } from './header-menu.component';
import { HeaderMenuItemComponent } from './header-menu-item/header-menu-item.component';

@NgModule({
  declarations: [HeaderMenuComponent, HeaderMenuItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialSharedModule
  ],
  exports:[HeaderMenuComponent]
})
export class HeaderMenuModule { }
