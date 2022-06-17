import { Injectable, OnDestroy } from '@angular/core';
import { SideNavItem } from '../components/side-nav/side-nav-item/side-nav-item.interface';
import { HeaderMenuItem } from '../components/header/header-menu/header-menu-item/header-menu-item.interface';

import { BehaviorSubject } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NavService{

  private _items: Array<SideNavItem>;
  get items(): Array<SideNavItem> {
    return this._items;
  }
  set items(value: Array<SideNavItem>) {
    this._items = value;
  }

  private _headerItems: Array<HeaderMenuItem>;
  get headerItems(): Array<HeaderMenuItem> {
    return this._headerItems;
  }
  set headerItems(value: Array<HeaderMenuItem>) {
    this._headerItems = value;
  }

  private _mobileSubject = new BehaviorSubject<boolean>(this._mediaObserver.isActive('lt-md'));
  mobile$ = this._mobileSubject.asObservable();

  private _wideScreenSubject = new BehaviorSubject<boolean>(this._mediaObserver.isActive('gt-md'));
  wideScreen$ = this._wideScreenSubject.asObservable();

  private _modeSubject = new BehaviorSubject<string>('over');
  mode$ = this._modeSubject.asObservable();

  private _collapsedSubject = new BehaviorSubject<boolean>(true);
  collapsed$ = this._collapsedSubject.asObservable();
  private imageBaseUrl: string = 'assets/image/menu/';

  constructor(private _mediaObserver: MediaObserver) {
    this._mediaObserver.asObservable().pipe(
      map(()=> this._mediaObserver.isActive('lt-md'))
    ).subscribe(isMobile=>{
      if(isMobile) {
        this._mobileSubject.next(true);
        this._modeSubject.next('over');
        this._collapsedSubject.next(false);
      }
      else{
        //Do not make any changes if it is not changing from mobile.
        if (this._mobileSubject.value) {
          this._mobileSubject.next(false);
          this._modeSubject.next('over');
          this._collapsedSubject.next(true);
        }
      }
    });

    //If screen width is bigger than 1920px.
    this._mediaObserver.asObservable().pipe(
      map(()=> this._mediaObserver.isActive('gt-md'))
    ).subscribe(isWideScreen=>{
      if(isWideScreen) {
        this._wideScreenSubject.next(true);
      }
      else{
        this._wideScreenSubject.next(false);
      }
    });

  }

  setNavItems(): void {
    this._items = new Array<SideNavItem>();
    //Booking Contents
    let subHeadingBooking = new SideNavItem();
    subHeadingBooking.active = false;
    subHeadingBooking.type = 'subheading';
    subHeadingBooking.name = 'Booking';
    this._items.push(subHeadingBooking);

    let itemHome = new SideNavItem();
    itemHome.active = true;
    itemHome.type = 'item';
    itemHome.name = 'Page 1';
    itemHome.router = '/dashboard';
    itemHome.icon = 'home';
    this._items.push(itemHome);

    let itemConcepts = new SideNavItem();
    itemConcepts.active = false;
    itemConcepts.type = 'item';
    itemConcepts.name = 'Page 2';
    itemConcepts.router = '/report';
    itemConcepts.icon = 'home';
    this._items.push(itemConcepts);

    let itemProducts = new SideNavItem();
    itemProducts.active = false;
    itemProducts.type = 'item';
    itemProducts.name = 'Page 3';
    itemProducts.router = '/router';
    itemProducts.icon ='home';
    this._items.push(itemProducts);

    //Administration
    let subHeadingAdministration = new SideNavItem();
    subHeadingAdministration.active = false;
    subHeadingAdministration.type = 'subheading';
    subHeadingAdministration.name = 'Administration';
    this._items.push(subHeadingAdministration);

    let itemProStaff = new SideNavItem();
    itemProStaff.type = 'item';
    itemProStaff.active = false;
    itemProStaff.name = 'Page 4';
    itemProStaff.router = '/router';
    itemProStaff.icon = 'home';
    this._items.push(itemProStaff);

    let itemReferrer = new SideNavItem();
    itemReferrer.type = 'item';
    itemReferrer.active = false;
    itemReferrer.name = 'Page 5';
    itemReferrer.router = '/router';
    itemReferrer.icon = 'home';
    this._items.push(itemReferrer);

    let itemRadiographer = new SideNavItem();
    itemRadiographer.type = 'item';
    itemRadiographer.active = false;
    itemRadiographer.name = 'Page 6';
    itemRadiographer.router = '/router';
    itemRadiographer.icon = 'home';
    this._items.push(itemRadiographer);

    let itemPractice = new SideNavItem();
    itemPractice.type = 'item';
    itemPractice.active = false;
    itemPractice.name = 'Page 7';
    itemPractice.router = '/router';
    itemPractice.icon = 'home';
    this._items.push(itemPractice);

    let itemRoom = new SideNavItem();
    itemRoom.type = 'item';
    itemRoom.active = false;
    itemRoom.name = 'Page 8';
    itemRoom.router = '/router';
    itemRoom.icon = 'home';
    this._items.push(itemRoom);

    let itemProcedureType = new SideNavItem();
    itemProcedureType.type = 'item';
    itemProcedureType.active = false;
    itemProcedureType.name = 'Page 9';
    itemProcedureType.router = '/router';
    itemProcedureType.icon = 'home';
    this._items.push(itemProcedureType);

    let itemScanType = new SideNavItem();
    itemScanType.type = 'item';
    itemScanType.active = false;
    itemScanType.name = 'Page 10';
    itemScanType.router = '/router';
    itemScanType.icon = 'home';
    this._items.push(itemScanType);

    //System 
    let subHeadingSystem = new SideNavItem();
    subHeadingSystem.active = false;
    subHeadingSystem.type = 'subheading';
    subHeadingSystem.name = 'System Utility';
    this._items.push(subHeadingSystem);

    let itemBroadcastQue = new SideNavItem();
    itemBroadcastQue.type = 'item';
    itemBroadcastQue.active = false;
    itemBroadcastQue.name = 'Page 11';
    itemBroadcastQue.router = '/router';
    itemBroadcastQue.icon = 'home';
    this._items.push(itemBroadcastQue);

    let itemConfiguration = new SideNavItem();
    itemConfiguration.type = 'item';
    itemConfiguration.active = false;
    itemConfiguration.name = 'Page 12';
    itemConfiguration.router = '/router';
    itemConfiguration.icon = 'home';
    this._items.push(itemConfiguration);



    let subHeadingItems = new SideNavItem();
    subHeadingItems.active = false;
    subHeadingItems.type = 'subheading';
    subHeadingItems.name = 'Items';
    this._items.push(subHeadingItems);

    let item1 = new SideNavItem();
    item1.type = 'item';
    item1.active = false;
    item1.name = 'Items 1';
    item1.icon = 'grass';
    item1.subItems = this.getSubNavItems();
    this._items.push(item1);

    let item2 = new SideNavItem();
    item2.type = 'item';
    item2.active = false;
    item2.name = 'Items 2';
    item2.icon = 'emoji_nature';
    item2.subItems = this.getSubNavItems();
    this._items.push(item2);

  }

  setEsNavItems(): void{
    this._items = new Array<SideNavItem>();

    let itemHome = new SideNavItem();
    itemHome.active = true;
    itemHome.type = 'item';
    itemHome.name = 'Home';
    itemHome.router = '/home';

    this._items.push(itemHome);

    let itemConcepts = new SideNavItem();
    itemConcepts.active = false;
    itemConcepts.type = 'item';
    itemConcepts.name = 'Concepts';
    itemConcepts.router = '/concepts';

    this._items.push(itemConcepts);

    let itemProducts = new SideNavItem();
    itemProducts.active = false;
    itemProducts.type = 'item';
    itemProducts.name = 'Products';
    itemProducts.router = '/router';
    itemProducts.subItems = new Array<SideNavItem>();
    // Products List
    let item1 = new SideNavItem();
    item1.type = 'item';
    item1.active = false;
    item1.name = 'T Series';
    item1.router = '/t-series';
    item1.hasParent = true;

    let item2 = new SideNavItem();
    item2.type = 'item';
    item2.active = false;
    item2.name = 'D Series';
    item2.router = '/d-series';
    item2.hasParent = true;

    let item3 = new SideNavItem();
    item3.type = 'item';
    item3.active = false;
    item3.name = 'C Series';
    item3.router = '/c-series';
    item3.hasParent = true;

    let item4 = new SideNavItem();
    item4.type = 'item';
    item4.active = false;
    item4.name = 'Stainless Wire Leader';
    item4.router = '/stainless-wire-leader';
    item4.hasParent = true;

    itemProducts.subItems.push(item1);
    itemProducts.subItems.push(item2);
    itemProducts.subItems.push(item3);
    itemProducts.subItems.push(item4);

    this._items.push(itemProducts);

    let itemProStaff = new SideNavItem();
    itemProStaff.type = 'item';
    itemProStaff.active = false;
    itemProStaff.name = 'Pro Staff';
    itemProStaff.router = '/router';

    this._items.push(itemProStaff);

    let itemCompany = new SideNavItem();
    itemCompany.type = 'item';
    itemCompany.active = false;
    itemCompany.name = 'Company';
    itemCompany.router = '/router';

    this._items.push(itemCompany);

    let itemContactUs = new SideNavItem();
    itemContactUs.type = 'item';
    itemContactUs.active = false;
    itemContactUs.name = 'Contact Us';
    itemContactUs.router = '/router';

    this._items.push(itemContactUs);


  }

  getSubNavItems(): Array<SideNavItem>{
    let list = new Array<SideNavItem>();
    let item1 = new SideNavItem();
    item1.type = 'item';
    item1.active = false;
    item1.name = 'Sub Page 1';
    item1.router = '/work-in-progress';
    item1.hasParent = true;

    let item2 = new SideNavItem();
    item2.type = 'item';
    item2.active = false;
    item2.name = 'Sub Page 2';
    item2.router = '/router';
    item2.hasParent = true;

    let item3 = new SideNavItem();
    item3.type = 'item';
    item3.active = false;
    item3.name = 'Sub Page 3';
    item3.router = '/router';
    item3.hasParent = true;

    list.push(item1);
    list.push(item2);
    list.push(item3);

    return list;
  }

  getHeaderItemsWithIcon(): Array<HeaderMenuItem>
  {
    let headerItems = new Array<HeaderMenuItem>();
    let productsItem = new HeaderMenuItem();
    productsItem.name = 'PRODUCT';
    productsItem.router = '/products';
    productsItem.icon = this.imageBaseUrl + "PRODUCT.jpg";
    headerItems.push(productsItem);

    // productsItem.subItems = new Array<HeaderMenuItem>();
    // let item1 = new HeaderMenuItem();
    // item1.name = 'T Series';
    // productsItem.subItems.push(item1);
    // let item2 = new HeaderMenuItem();
    // item2.name = 'D Series';
    // productsItem.subItems.push(item2);
    // let item3 = new HeaderMenuItem();
    // item3.name = 'C Series';
    // productsItem.subItems.push(item3);
    // let item4 = new HeaderMenuItem();
    // item4.name = 'Stainless Wire Leader';
    // productsItem.subItems.push(item4);
  
    let valueItem = new HeaderMenuItem();
    valueItem.name = 'VALUE';
    valueItem.router='/value'
    valueItem.icon = this.imageBaseUrl + "VALUE.jpg";
    headerItems.push(valueItem);

    let techItem = new HeaderMenuItem();
    techItem.name = 'TECHNOLOGIES';
    techItem.router = '/technologies'
    techItem.icon = this.imageBaseUrl + "TECH.jpg";
    headerItems.push(techItem);
    return headerItems;
  }

  setHeaderItems(): void{
    this._headerItems = new Array<HeaderMenuItem>();

    let homeItem = new HeaderMenuItem();
    homeItem.name = 'HOME';
    homeItem.router = '/home';
    this._headerItems.push(homeItem);
    this._headerItems.push.apply(this._headerItems, this.getHeaderItemsWithIcon());
    let contactUsItem = new HeaderMenuItem();
    contactUsItem.name = 'CONTACT';
    contactUsItem.router = '/contact'
    this._headerItems.push(contactUsItem);
  }

  setMode(mode: string) {
    this._modeSubject.next(mode);
  }

  setCollapsed(collapsed: boolean) {
    this._collapsedSubject.next(collapsed);
  }
}
