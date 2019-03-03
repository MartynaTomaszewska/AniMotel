import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import * as M from 'materialize-css';

@Component({
  selector: 'app-hotel-offer',
  templateUrl: './hotel-offer.component.html',
  styleUrls: ['./hotel-offer.component.css']
})
export class HotelOfferComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {

    var materialboxElems = document.querySelectorAll('.materialboxed');
    var materialboxInstances = M.Materialbox.init(materialboxElems, {});

    var modalElems = document.querySelectorAll('.modal');
    var modalInstances = M.Modal.init(modalElems, {});

    this.galleryOptions = [
      { "image": false, "thumbnailsRemainingCount": true, "height": "100px" },
      { "breakpoint": 500, "width": "100%", "thumbnailsColumns": 2 }
    ];

    this.galleryImages = [
      {
        small: 'assets/img/hotels/hotel1.jpeg',
        big: 'assets/img/hotels/hotel1.jpeg'
      },
      {
        small: 'assets/img/animals/dog5.jpeg',
        big: 'assets/img/animals/dog5.jpeg'
      },
      {
        small: 'assets/img/home/home1.jpeg',
        big: 'assets/img/home/home1.jpeg'
      }
    ];

  }
}
