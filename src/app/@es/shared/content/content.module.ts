import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentDirective } from './content.directive';



@NgModule({
  declarations: [ContentDirective],
  imports: [
    CommonModule
  ],
  exports:[
    ContentDirective
  ]
})
export class ContentModule { }
