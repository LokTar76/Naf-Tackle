import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickPanelComponent } from './quick-panel.component';
import { MaterialSharedModule } from '../../@es/shared/material-shared.module';
import { ScrollbarModule } from '../../@es/shared/scrollbar/scrollbar.module';


@NgModule({
  declarations: [QuickPanelComponent],
  imports: [
    CommonModule,
    MaterialSharedModule,
    ScrollbarModule
  ],
  exports: [QuickPanelComponent]
})
export class QuickPanelModule { }
