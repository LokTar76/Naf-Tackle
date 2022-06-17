import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-quick-panel-toggle',
  templateUrl: './header-quick-panel-toggle.component.html',
  styleUrls: ['./header-quick-panel-toggle.component.scss']
})
export class HeaderQuickPanelToggleComponent implements OnInit {

  @Output() openQuickPanel = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
