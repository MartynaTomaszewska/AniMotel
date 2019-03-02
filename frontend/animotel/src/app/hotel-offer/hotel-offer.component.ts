import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-hotel-offer',
  templateUrl: './hotel-offer.component.html',
  styleUrls: ['./hotel-offer.component.css']
})
export class HotelOfferComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, { });

  }
}
