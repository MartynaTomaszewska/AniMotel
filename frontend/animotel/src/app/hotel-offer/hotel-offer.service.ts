import { Injectable } from '@angular/core';
import { NumericDictionary } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import {flatMap, catchError} from 'rxjs/operators';

enum Animal {
  Dog,
  Cat,
  Horse,
  Bird,
  Reptile
}

export interface HotelOffer {
  id: number;
  name: string;
  description: string;
  adv_type: string;
  accepted_animals: Animal[];
  pros: number[];
  price_per_day: number;
  phone: string;
  city: string;
  street: string;
  post_code: string;
  images: HotelOfferImg[];
}

export interface HotelOfferImg {
  hotel_offer_id: number; 
  image: string;
}

export const AnimalToIcon = {
  [Animal.Dog]: 'fas fa-dog',
  [Animal.Cat]: 'fas fa-cat',
  [Animal.Horse]: 'fas fa-horse',
  [Animal.Bird]: 'fas fa-dove',
  [Animal.Reptile]: 'fas fa-frog',
}

@Injectable({
  providedIn: 'root'
})
export class HotelOfferService {

  private hotelOffers: HotelOffer[];

  constructor(private http: HttpClient) { }

  getHotelOffers(): Observable<HotelOffer[]> {
    
    if (this.hotelOffers) {
      return of(this.hotelOffers);
    } else {
      return this.http.get<any>('/api/advertisements').pipe(
        flatMap(response => {
          if (response) {
            this.hotelOffers = response.advertisements;
            return of(this.hotelOffers);
          } else {
            return EMPTY;
          }
        }),
        catchError((error, caught) => { 
          return EMPTY;
        })
      );
    }

  }

}


