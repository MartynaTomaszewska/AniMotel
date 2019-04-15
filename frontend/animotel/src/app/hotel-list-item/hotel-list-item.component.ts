import { Component, OnInit, Input } from '@angular/core';
import { HotelOffer, AnimalToIcon, ProToStr } from '../hotel-offer/hotel-offer.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-hotel-list-item',
  templateUrl: './hotel-list-item.component.html',
  styleUrls: ['./hotel-list-item.component.css']
})
export class HotelListItemComponent implements OnInit {

  @Input('offer') offer: HotelOffer;

  AnimalToIcon = AnimalToIcon;
  ProToStr = ProToStr;
  
  apiUrl = environment.apiUrl;

  constructor() { }

  ngOnInit() {
    
  }

}
