import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialSharedModule } from '../../../@es/shared/material-shared.module';
import { NewsBoardComponent } from './news-board.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsService } from 'src/app/services/news.service';


@NgModule({
  declarations: [NewsBoardComponent, NewsItemComponent],
  imports: [
    CommonModule,
    MaterialSharedModule
  ],
  exports:[NewsBoardComponent],
  providers:[NewsService]
})
export class NewsBoardModule { }
