import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-quick-panel',
  templateUrl: './quick-panel.component.html',
  styleUrls: ['./quick-panel.component.scss']
})
export class QuickPanelComponent implements OnInit {

  test = [1,2,3,4,5,6,7,8,9,10];

  mode: string;
  panelOpenState = false;
  isMobile$ = this._navService.mobile$;

  constructor(private _navService: NavService) {

  }

  ngOnInit(): void {
    this.mode = 'quickPanel';
  }

}
