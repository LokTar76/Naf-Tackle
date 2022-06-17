import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'app-side-nav-mobile',
  templateUrl: './side-nav-mobile.component.html',
  styleUrls: ['./side-nav-mobile.component.scss']
})
export class SideNavMobileComponent implements OnInit {

  @Output() closeMobileDrawer = new EventEmitter();

  items: any;

  constructor(private _navService: NavService) { 
    this._navService.setEsNavItems();
    this.items = this._navService.items;
  }

  ngOnInit(): void {

  }

  logout() {

  }


}
