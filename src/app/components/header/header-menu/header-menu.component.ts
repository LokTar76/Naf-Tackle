import { Component, OnInit } from '@angular/core';
import { NavService } from '../../../services/nav.service';
import { HeaderMenuItem } from './header-menu-item/header-menu-item.interface';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})

export class HeaderMenuComponent implements OnInit {

  items: Array<HeaderMenuItem>;

  constructor(private _navService: NavService) {
    this._navService.setHeaderItems();
    this.items = this._navService.headerItems;
  }

  ngOnInit(): void {

  }

}
