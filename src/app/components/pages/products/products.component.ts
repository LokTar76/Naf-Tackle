import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery-9';
import 'hammerjs';
import { Product } from 'src/app/es.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;
  selectedProduct: Product;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  imageBaseUrl: string = 'assets/image/products';
  videoBaseUrl: string = 'assets/image/products';

  constructor() { }

  ngOnInit(): void {
    this.initializeProducts();
    //this.loadImageGallery();
  }

  initializeProducts(): void {
    this.products = new Array<Product>();
    this.selectedProduct = undefined;
    let c_series: Product = {
      name: 'C-SERIES',
      description: 'The NAF C-series ball sinkers come with a solid eye making them easy to attach with slider rigs, snaps or your favourite loop knot.',
      imageThumbnails: [this.imageBaseUrl + '/C SERIES/C1.jpg', this.imageBaseUrl + '/C SERIES/C2.jpg', this.imageBaseUrl + '/C SERIES/C3.jpg', this.imageBaseUrl + '/C SERIES/C4.jpg'],
      defaultImageUrl: this.imageBaseUrl + '/C SERIES/C1.jpg',
      specifications: [
        {
          color: 'Silver Grey',
          model: ['C-20', 'C-30', 'C-40', 'C-40', 'C-60', 'C-80'],
          weight_g: [20, 30, 40, 50, 60, 80],
          weight_oz: ['3/4', '1', '1 3/8', '1 3/4', '2', '3']
        },
        {
          color: 'Mint Green',
          model: ['C-100', 'C-120', 'C-150', 'C-200', 'C-250'],
          weight_g: [100, 120, 150, 200, 250],
          weight_oz: ['3 1/2', '4', '5', '7', '9']
        }
      ],
      videoUrl: this.videoBaseUrl + '/C SERIES/C30-full.mov'
    };
    let d_series: Product = {
      name: 'D-SERIES',
      description: 'The NAF D-series sinkers are designed for long distance casting and deep-drop fishing. They sink fast and can deliver your bait to the bottom quickly with minimal flutter. ',
      imageThumbnails: [this.imageBaseUrl + '/D SERIES/D1.jpg', this.imageBaseUrl + '/D SERIES/D2.jpg', this.imageBaseUrl + '/D SERIES/D3.jpg', this.imageBaseUrl + '/D SERIES/D4.jpg'],
      defaultImageUrl: this.imageBaseUrl + '/D SERIES/D1.jpg',
      specifications: [
        {
          model: ['D-70', 'D-80', 'D-90', 'D-100', 'D-110', 'D-120', 'D-130', 'D-150'],
          weight_g: [70, 80, 90, 100, 110, 120, 130, 150],
          weight_oz: ['2 1/2', '2 3/4', '3 1/8', '3 1/2', '4', '4 1/4', '4 1/2', '5']
        },
        {
          model: ['D-180', 'D-200', 'D-250', 'D-300', 'D-400', 'D-500', 'D-600'],
          weight_g: [180, 200, 250, 300, 400, 500, 600],
          weight_oz: ['6', '7', '9', '10', '14', '18', '20']
        },
        {
          model: ['D-750', 'D-1000', 'D-1500', 'D-2000', 'D-2500', 'D-3000', 'D-4000'],
          weight_g: [750, 1000, 1500, 2000, 2500, 3000, 4000],
          weight_oz: ['26', '35', '50', '70', '90', '100', '140']
        }
      ],
      videoUrl: this.videoBaseUrl + '/D SERIES/D3000-full.mov'
    };

    let t_series: Product = {
      name: 'T-SERIES',
      description: 'NAF T-series ball sinkers are designed as a running sinker. This provides natural presentation and allows the bait to move around with the current. The NAF T-series ball sinker comes with a super smooth hole through the centre of the sinker. This allows the line to run free without fear of chafing or damage. NAF T-series ball sinkers are great for freshwater and saltwater fishing.',
      imageThumbnails: [this.imageBaseUrl + '/T SERIES/T1.jpg', this.imageBaseUrl + '/T SERIES/T2.jpg', this.imageBaseUrl + '/T SERIES/T3.jpg'],
      defaultImageUrl: this.imageBaseUrl + '/T SERIES/T1.jpg',
      specifications: [
        {
          color: 'Silver Grey',
          model: ['T-10', 'T-15', 'T-20', 'T-30', 'T-40', 'T-50', 'T-60', 'T-80'],
          weight_g: [10, 15, 20, 30, 40, 50, 60, 80],
          weight_oz: ['3/8', '1/2', '3/4', '1', '1 3/8', '1 3/4', '2', '3']
        },
        {
          color: 'Cream Orange',
          model: ['T-100', 'T-120', 'T-150', 'T-200'],
          weight_g: [100, 120, 150, 200],
          weight_oz: ['3 1/2', '4', '5', '7']
        }
      ],
      videoUrl: this.videoBaseUrl + '/T SERIES/T200-full_3.mov'
    };
    // let l_series: Product = {
    //   name: 'L-SERIES',
    //   description: 'Product description here;',
    //   imageThumbnails: ['1', '2', '3'],
    //   defaultImageUrl: '1'
    // };
    this.products.push(c_series);
    this.products.push(d_series);
    this.products.push(t_series);
    //Missing l-series.
    //this.products.push(l_series);
  }

  removeSelectedProduct(): void {
    this.selectedProduct = undefined;
  }

  onProductClick(product: Product): void {
    this.selectedProduct = product;
    this.loadImageGallery();
  }

  onImageClick(): void {

  }

  loadImageGallery(): void {
    this.galleryOptions = [
      {
        width: '280px',
        height: '370px',
        thumbnailsColumns: 3,
        thumbnailSize: NgxGalleryImageSize.Contain,
        //imagePercent: 100,
        thumbnails: true,
        preview: false,
        imageBullets: false,
        imageArrows: false,
        imageSize: NgxGalleryImageSize.Contain,
        //imageSize: NgxGalleryImageSize.Contain,
        //thumbnailSize: NgxGalleryImageSize.Contain
      }
    ];
    this.galleryImages = [];
    this.selectedProduct.imageThumbnails.forEach(image => {
      this.galleryImages.push(
        {
          small: image,
          medium: image,
        }
      )
    });
  }

}
