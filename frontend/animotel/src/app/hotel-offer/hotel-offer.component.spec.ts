import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelOfferComponent } from './hotel-offer.component';

describe('HotelOfferComponent', () => {
  let component: HotelOfferComponent;
  let fixture: ComponentFixture<HotelOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
