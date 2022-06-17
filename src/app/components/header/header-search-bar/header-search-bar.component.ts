import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-search-bar',
  templateUrl: './header-search-bar.component.html',
  styleUrls: ['./header-search-bar.component.scss']
})
export class HeaderSearchBarComponent implements OnInit {

  focused: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  closeDropdown():void {
    this.focused = false;
  }

  openDropdown(): void {
    this.focused = true;
  }

}
