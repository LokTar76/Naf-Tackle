import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-mobile-menu-toggle',
  templateUrl: './header-mobile-menu-toggle.component.html',
  styleUrls: ['./header-mobile-menu-toggle.component.scss']
})
export class HeaderMobileMenuToggleComponent implements OnInit {

  @Output() openSideNav = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
