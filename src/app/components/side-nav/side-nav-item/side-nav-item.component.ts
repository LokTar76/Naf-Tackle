import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SideNavItem } from './side-nav-item.interface';
import { NavService } from '../../../services/nav.service';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss'],
  animations: [
    trigger('dropdownOpen',[
      state('false', style({
        height: 0
      })),
      state('true', style({
        height: '*'
      })),
      transition('false <=> true', animate('300ms cubic-bezier(.35, 0, .25, 1)'))
    ])
  ]
})
export class SideNavItemComponent implements OnInit {

  @Input('item') item: SideNavItem;
  @Output() closeMobileDrawer = new EventEmitter();

  collapsed$ = this._navService.collapsed$;

  open: boolean = false;

  constructor(private _navService: NavService) { }

  ngOnInit(): void {
    
  }

  openSubItems(): void{
    this.open = !this.open;
  }

  getTextIcon() {
    let result = '';

    if (this.item) {
      const name = this.item.name.split(' ');

      if (name.length > 0) {
        result += name[0].charAt(0).toUpperCase();
      }

      if (name.length > 1) {
        result += name[1].charAt(0).toLowerCase();
      }

      if (name.length === 1) {
        result += name[0].charAt(1).toLowerCase();
      }
    }

    return result;
  }
}
