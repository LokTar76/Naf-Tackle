import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologiesRoutingModule } from './technologies-routing.module';
import { TechnologiesComponent } from './technologies.component';
import { AppSharedModule } from 'src/app/@es/shared/app-shared.module';
import { MaterialSharedModule } from 'src/app/@es/shared/material-shared.module';


@NgModule({
  declarations: [TechnologiesComponent],
  imports: [
    CommonModule,
    TechnologiesRoutingModule,
    AppSharedModule,
    MaterialSharedModule
  ]
})
export class TechnologiesModule { }
