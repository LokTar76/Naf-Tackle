import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialSharedModule } from '../@es/shared/material-shared.module';
import { ScrollbarModule } from '../@es/shared/scrollbar/scrollbar.module';
import { HeaderModule } from '../components/header/header.module'
import { SideNavModule } from '../components/side-nav/side-nav.module';
import { QuickPanelModule } from '../components/quick-panel/quick-panel.module';
import { FooterModule } from '../components/footer/footer.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialSharedModule,
    ScrollbarModule,
    HeaderModule,
    SideNavModule,
    QuickPanelModule,
    FooterModule
  ],
  exports: [],
})
export class LayoutModule { }
