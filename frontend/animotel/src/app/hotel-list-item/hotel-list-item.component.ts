import { Component, OnInit, Input } from '@angular/core';
import { HotelOffer, AnimalToIcon, ProToStr } from '../hotel-offer/hotel-offer.service';


@Component({
  selector: 'app-hotel-list-item',
  templateUrl: './hotel-list-item.component.html',
  styleUrls: ['./hotel-list-item.component.css']
})
export class HotelListItemComponent implements OnInit {

  AnimalToIcon = AnimalToIcon;
  ProToStr = ProToStr;

  @Input('offer') offer: HotelOffer;

  constructor() { }

  ngOnInit() {
    
  }

}
