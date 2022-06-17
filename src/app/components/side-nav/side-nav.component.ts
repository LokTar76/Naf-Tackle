import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  sideDrawer: boolean;
  items: any;

  collapsed$ = this._navService.collapsed$;

  constructor(private _navService: NavService) { 
    this._navService.setNavItems();
    this.items = this._navService.items;
  }

  ngOnInit(): void {
    this.sideDrawer = false;
  }

  changeMode(): void{
    this.sideDrawer = !this.sideDrawer;
    if (this.sideDrawer)
      this._navService.setMode('side')
    else
      this._navService.setMode('over');
  }

  @HostListener('mouseenter')
  @HostListener('touchenter')
  onMouseEnter() {
    if (this.sideDrawer){
      return;
    }
    this._navService.setCollapsed(false);
  }

  @HostListener('mouseleave')
  @HostListener('touchleave')
  onMouseLeave() {
    if (this.sideDrawer){
      return;
    }
    this._navService.setCollapsed(true);
  }

  logout(): void{
    return;
  }

}
