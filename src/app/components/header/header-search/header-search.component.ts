import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {

  @ViewChild('input') input: ElementRef

  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  openSearch(): void {
    this.isOpen = true;
    setTimeout(() => { //Set time out for animation and isOpen to change (0). Or use change detector.
        this.input.nativeElement.focus();
    }, 100);
  }

  closeSearch(): void {
    this.isOpen = false;
  }
}
