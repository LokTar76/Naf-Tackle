import { Component, Input, OnInit } from '@angular/core';
import { NewsItem } from './news-item.interface';

@Component({
  selector: 'news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input("item") item: NewsItem;

  constructor() { }

  ngOnInit(): void {

  }

}
