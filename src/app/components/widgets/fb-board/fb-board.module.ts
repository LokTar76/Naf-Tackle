import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbBoardComponent } from './fb-board.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [FbBoardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports:[FbBoardComponent]
})
export class FbBoardModule { }
