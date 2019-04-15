import { Injectable } from '@angular/core';
import { NumericDictionary } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap, catchError } from 'rxjs/operators';

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
  pros: string[];
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
  dog: 'fas fa-dog',
  cat: 'fas fa-cat',
  horse: 'fas fa-horse',
  bird: 'fas fa-dove',
  reptile: 'fas fa-frog',
}

export const ProToStr = {
  '1': 'blisko miasta',
  '2': 'z dala od miasta',
  '3': 'w centrum miasta',
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

  getHotelOfferById(id: number): Observable<HotelOffer> {

    return this.getHotelOffers().pipe(flatMap(offers => {
      let foundOffer;
      for (let offer of offers) {
        if (offer.id == id) {
          foundOffer = offer;
          break;
        }
      }
      return foundOffer;
    }));
  }

}


