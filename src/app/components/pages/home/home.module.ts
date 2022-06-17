import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewsBoardModule } from '../../widgets/news-board/news-board.module';
import { AppSharedModule } from '../../../@es/shared/app-shared.module';
import { FbBoardModule } from '../../widgets/fb-board/fb-board.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppSharedModule,
    FlexLayoutModule,
    NewsBoardModule,
    NgxGalleryModule,
    FbBoardModule
  ]
})
export class HomeModule { }
