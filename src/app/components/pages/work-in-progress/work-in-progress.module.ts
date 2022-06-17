import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkInProgressRoutingModule } from './work-in-progress-routing.module';
import { WorkInProgressComponent } from './work-in-progress.component';

import { MaterialSharedModule } from '../../../@es/shared/material-shared.module';
import { AppSharedModule } from '../../../@es/shared/app-shared.module';

@NgModule({
  declarations: [WorkInProgressComponent],
  imports: [
    CommonModule,
    WorkInProgressRoutingModule,
    MaterialSharedModule,
    AppSharedModule
  ],
  exports:[WorkInProgressComponent]
})
export class WorkInProgressModule { }
