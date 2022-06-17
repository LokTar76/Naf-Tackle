import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AppSharedModule } from 'src/app/@es/shared/app-shared.module';
import { MaterialSharedModule } from 'src/app/@es/shared/material-shared.module';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { SpecificationTableComponent } from './specification-table/specification-table.component';


@NgModule({
  declarations: [ProductsComponent, SpecificationTableComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AppSharedModule,
    MaterialSharedModule,
    NgxGalleryModule
  ],
  exports: [SpecificationTableComponent]
})
export class ProductsModule { }
