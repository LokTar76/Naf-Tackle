import { Component, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../services/nav.service';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @ViewChild('mobileDrawer') mobileDrawer;
  @ViewChild('quickPanel') quickPanel;
  
  drawerOpened: boolean;
  quickPanelOpened: boolean;
  drawerMode: string;
  sideNavCollapsed: boolean = true;
  hasBackdrop: boolean = false;
  mobile$ = this._navService.mobile$;
  mode$ = this._navService.mode$;
  wideScreen$ = this._navService.wideScreen$;
  media: string = 'wideScreen'

  constructor(private _navService: NavService) {
      this.mode$.subscribe(value =>{
        this.drawerMode = value;
      });
      this.wideScreen$.subscribe(isWideScreen=>{
        if(isWideScreen){
          this.media = 'wideScreen';
        }
        else{
          this.media = 'screen';
        }
      });
   }

  ngOnInit(): void {
    this.drawerOpened = true;
    this.quickPanelOpened = false;
  }

  handleOpenSideNav(): void {
    this.mobileDrawer.toggle();
  }

  handleOpenQuickPanel(): void{
    this.quickPanel.open();
    this.quickPanelOpened = true;
  }

  quickPanelCloseStarted(): void{
    this.quickPanelOpened = false;
  }
}
