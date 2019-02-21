import * as M from 'materialize-css';

import { Component, OnInit, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { map, flatMap } from 'rxjs/operators';

//import * as M from 'materialize-css/dist/js/materialize';

//import { MaterializeAction, MaterializeDirective } from 'angular2-materialize';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  private isScrolled = false;

  //closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor

  constructor(private router: Router) { }

  public showSideNav() {
    //this.sideNavActions.emit({ action: 'sideNav', params: ['show'] });
  }

  public hideSideNav() {
    //this.sideNavActions.emit({ action: 'sideNav', params: ['hide'] });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    $('.sidenav').sidenav();
  }

  headerClasses() {
    return {
      'header--transparent': this.onLandingPage(),
      'header--opaque' : !this.onLandingPage()
    };
  }

  logoClasses() {
    return {
      'brand-logo': true,
      'brand-logo--mini' : !this.onLandingPage()
    };
  }

  logoImg() {
    return 'assets/img/logoWhite.png';
  }

  navigateToLanding() {
    this.router.navigate([""]);
  }

  selectModel(modelId) {
  
  }

  selectConfiguratorStep(step) {
   
  }

  getModelsNames() {
  
  }

  private onLandingPage() {
    return this.router.isActive('/', true);
  }

  @HostListener('window:scroll', ['$event'])
  private onWindowScroll(event: any) {
    const height = event.target.documentElement.clientHeight;
    const scroll = event.target.documentElement.scrollTop;
    //this.isScrolled = scroll / height > 0.1;
  }

}