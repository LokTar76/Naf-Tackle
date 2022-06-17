import { Directive, HostBinding } from '@angular/core';
import { NavService } from '../../../services/nav.service';

@Directive({
  selector: '[appContent],app-content',
  host:{
    class: 'app-content'
  }
})
export class ContentDirective {
  mode: string;
  mobile: boolean;

  constructor(private _navService: NavService) {
    this._navService.mode$.subscribe(value =>{
      this.mode = value;
    });
    this._navService.mobile$.subscribe(isMobile=>{
      this.mobile = isMobile;
    });
  }

  @HostBinding('class.side')
  get isSide() {
    return  this.mode == 'side';
  }

  @HostBinding('class.mobile')
  get isMobile() {
    return false;
    return this.mobile;
  }
}
