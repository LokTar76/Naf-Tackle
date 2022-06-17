import { Component, OnInit, Input } from '@angular/core';
import { HeaderMenuItem } from './header-menu-item.interface';

@Component({
  selector: 'header-menu-item',
  templateUrl: './header-menu-item.component.html',
  styleUrls: ['./header-menu-item.component.scss']
})
export class HeaderMenuItemComponent implements OnInit {

  @Input('item') item: HeaderMenuItem;


  constructor() { }

  ngOnInit(): void {

  }

}
