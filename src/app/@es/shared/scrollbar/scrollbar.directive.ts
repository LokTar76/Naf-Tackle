import { AfterContentInit, Directive, ElementRef, Input, NgZone, HostBinding } from '@angular/core';
import SimpleBar from 'simplebar';

@Directive({
  selector: '[issScrollbar],app-scrollbar'
})
export class ScrollbarDirective {

  @Input('mode') mode: 'sideNav' | 'content' | 'quickPanel';
  @Input('media') media: 'screen' | 'wideScreen';

  scrollbarRef: SimpleBar;

  constructor(private _element: ElementRef, private zone: NgZone) {

  }

  ngAfterContentInit() {

    this.zone.runOutsideAngular(() => {
      this.scrollbarRef = new SimpleBar(this._element.nativeElement, []);
    });
  }

  @HostBinding('class.scrollbar-sideNav')
  get isSideNavScrollba() {
    return this.mode === 'sideNav';
  }

  @HostBinding('class.scrollbar-content')
  get isContentScrollbar() {
    return this.mode === 'content';
  }

  @HostBinding('class.scrollbar-quickPanel')
  get isQuickPanelScrollbar() {
    return this.mode === 'quickPanel';
  }

  @HostBinding('class.scrollbar-content-screen')
  get isScreen(){
    return this.media === 'screen';
  }

}
