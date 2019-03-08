import { TestBed } from '@angular/core/testing';

import { HotelOfferService } from './hotel-offer.service';

describe('HotelOfferServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelOfferService = TestBed.get(HotelOfferService);
    expect(service).toBeTruthy();
  });
});
