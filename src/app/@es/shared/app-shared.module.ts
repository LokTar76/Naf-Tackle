import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentModule } from './content/content.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ContentModule
  ]
})
export class AppSharedModule { }
