import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'hammerjs';
import { NewsService } from 'src/app/services/news.service';
import { NewsItem } from '../../widgets/news-board/news-item/news-item.interface';
import { NavService } from 'src/app/services/nav.service';
import { FbBoardComponent } from '../../widgets/fb-board/fb-board.component';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryAction, NgxGalleryComponent } from 'ngx-gallery-9';
import { HeaderMenuItem } from 'src/app/components/header/header-menu/header-menu-item/header-menu-item.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild('gallery') gallery: NgxGalleryComponent;
    @ViewChild('content') elementView: ElementRef;
    @ViewChild('fbBoard') fbBoard: FbBoardComponent;

    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
    companyNews: NewsItem[];
    staffReports: NewsItem[];
    height: any;
    items: Array<HeaderMenuItem>;
    mobile$ = this._navSerivce.mobile$;
    private imageBaseUrl: string = 'assets/image/home/';

    constructor(private _newsService: NewsService, private _navSerivce: NavService) {
      this.items = this._navSerivce.getHeaderItemsWithIcon();
    }

    ngOnInit(): void {
        this.loadImageGallery();
        this.loadCompanyNews();
        this.loadStaffReports();
    }

    ngAfterViewInit(): void{
        // console.log(this.elementView.nativeElement.offsetHeight);
        // this.fbBoard.height = this.elementView.nativeElement.offsetHeight;
    }

    loadCompanyNews(): void {
        this.companyNews = this._newsService.createDummyCompanyNews();
    }

    loadStaffReports(): void {
        this.staffReports = this._newsService.createDummyStaffReports();
    }

    loadImageGallery(): void {
        this.galleryOptions = [
          {
            width: '100%',
            height: '406px',
            imagePercent: 100,
            imageArrowsAutoHide: true,
            imageAnimation: NgxGalleryAnimation.Zoom,
            imageAutoPlay: true,
            imageAutoPlayInterval: 3000,
            imageAutoPlayPauseOnHover: true,
            imageInfinityMove: true,
            imageBullets: true,
            thumbnails: false,
            preview: false
          },
          // max-width 1280
          {
            breakpoint: 1280,
            width: '100%',
            height: '406px',
            imagePercent: 100,
            imageSwipe: true,
            imageArrows: false,
            imageBullets: true,
            imageArrowsAutoHide: false
          }
        ];
    
        this.galleryImages = [
          {
            medium: this.imageBaseUrl + '1.jpg',
          },
          {
            medium: this.imageBaseUrl + '2.jpg'
          },
          {
            medium: this.imageBaseUrl + '3.jpg'
          }
        ];
      }
    
      onImageClick(): void {
        let index = this.gallery.selectedIndex;
      }
}
