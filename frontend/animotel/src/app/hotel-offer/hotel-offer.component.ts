import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import * as M from 'materialize-css';
import { HotelOffer, HotelOfferService } from './hotel-offer.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

declare let paypal: any;

@Component({
  selector: 'app-hotel-offer',
  templateUrl: './hotel-offer.component.html',
  styleUrls: ['./hotel-offer.component.css']
})
export class HotelOfferComponent implements OnInit {

  hotelOffer: HotelOffer;

  apiUrl = environment.apiUrl;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute, private hotelOfferService: HotelOfferService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      let offerId = +params['id'];
      
      this.hotelOfferService.getHotelOfferById(offerId).subscribe(offer => {
        this.hotelOffer = offer;
      });
    });

    let materialboxElems = document.querySelectorAll('.materialboxed');
    let materialboxInstances = M.Materialbox.init(materialboxElems, {});

    let modalElems = document.querySelectorAll('.modal');
    let modalInstances = M.Modal.init(modalElems, {});

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

  getOfferImages() {
    
  }
}
