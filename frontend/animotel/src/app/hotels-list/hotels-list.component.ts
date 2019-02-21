import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  @ViewChild('locationSelect') locationSelect: ElementRef;
  @ViewChild('animalsSelect') animalsSelect: ElementRef;
  @ViewChild('startDateInput') startDateInput: ElementRef;
  @ViewChild('endDateInput') endDateInput: ElementRef;

  constructor() { }

  ngOnInit() {
    M.FormSelect.init(this.locationSelect.nativeElement, { });
    M.FormSelect.init(this.animalsSelect.nativeElement, { });
    M.Datepicker.init(this.startDateInput.nativeElement, { });
    M.Datepicker.init(this.endDateInput.nativeElement, { });
  }

}
