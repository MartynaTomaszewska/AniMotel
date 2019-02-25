import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelListItemComponent } from './hotel-list-item/hotel-list-item.component';
import { FooterComponent } from './footer/footer.component';
import { HotelOfferComponent } from './hotel-offer/hotel-offer.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    HotelsListComponent,
    HotelListItemComponent,
    FooterComponent,
    HotelOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
