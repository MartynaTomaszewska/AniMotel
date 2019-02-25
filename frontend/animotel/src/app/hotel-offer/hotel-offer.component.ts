import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-hotel-offer',
  templateUrl: './hotel-offer.component.html',
  styleUrls: ['./hotel-offer.component.css']
})
export class HotelOfferComponent implements OnInit {

  @ViewChild('imgBoxed') imgBoxed: ElementRef;

  constructor() { }

  ngOnInit() {

    let instance = M.Materialbox.init(this.imgBoxed.nativeElement, { });
    instance.originalHeight = 2000;
    instance.originalWidth = 2000;
  }
}
