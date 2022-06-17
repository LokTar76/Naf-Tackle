import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() openSideNav = new EventEmitter();
  @Output() openQuickPanel = new EventEmitter();

  mobile$ = this._navService.mobile$;
  wideScreen$ = this._navService.wideScreen$;
  mode$ = this._navService.mode$;

  constructor(private _navService: NavService) { }

  ngOnInit(): void {
  }
}
