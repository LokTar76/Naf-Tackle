import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'fb-board',
  templateUrl: './fb-board.component.html',
  styleUrls: ['./fb-board.component.scss']
})
export class FbBoardComponent implements OnInit {

  height: number;
  mobile$ = this._navService.mobile$;
  
  constructor(private _navService: NavService) { }

  ngOnInit(): void {
  }

  getHeight(): any{
    return {
      'height': this.height + 'px'
    }
  }

}
