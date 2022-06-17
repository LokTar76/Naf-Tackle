import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NewsItem } from './news-item/news-item.interface';

@Component({
  selector: 'news-board',
  templateUrl: './news-board.component.html',
  styleUrls: ['./news-board.component.scss']
})
export class NewsBoardComponent implements OnInit {

  @Input('title') title: string;
  @Input('items') items: Array<NewsItem>;


  constructor(private _newsService: NewsService) {

  }

  ngOnInit(): void {
  }

}
