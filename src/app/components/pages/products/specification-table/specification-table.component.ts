import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'specification-table',
  templateUrl: './specification-table.component.html',
  styleUrls: ['./specification-table.component.scss']
})
export class SpecificationTableComponent implements OnInit {

  @Input('specification') specification: any;

  constructor() { }

  ngOnInit(): void {
  }

}
