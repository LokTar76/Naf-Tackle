import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSharedModule } from '../../@es/shared/material-shared.module';
import { HeaderComponent } from './header.component';
import { HeaderMobileMenuToggleComponent } from './header-mobile-menu-toggle/header-mobile-menu-toggle.component';
import { HeaderQuickPanelToggleComponent } from './header-quick-panel-toggle/header-quick-panel-toggle.component';
import { HeaderSearchBarComponent } from './header-search-bar/header-search-bar.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HeaderMenuModule } from './header-menu/header-menu.module';

@NgModule({
  declarations: [HeaderComponent, HeaderMobileMenuToggleComponent, HeaderQuickPanelToggleComponent, HeaderSearchBarComponent, HeaderSearchComponent],
  imports: [
    CommonModule,
    MaterialSharedModule,
    HeaderMenuModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
