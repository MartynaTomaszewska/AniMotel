import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelOfferComponent } from './hotel-offer/hotel-offer.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'hotels', component: HotelsListComponent },
  { path: 'hotel-offer/:id', component: HotelOfferComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}