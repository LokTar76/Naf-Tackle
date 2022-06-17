import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { MaterialSharedModule } from 'src/app/@es/shared/material-shared.module';
import { AppSharedModule } from 'src/app/@es/shared/app-shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    MaterialSharedModule,
    AppSharedModule,
    RouterModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
