import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-nav-backoffice',
  templateUrl: './nav-backoffice.component.html',
  styleUrls: ['./nav-backoffice.component.scss'],
})
export class NavBackofficeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  toggleMenu() {
    $(".sidebar-backoffice").toggleClass('d-none');
  }


}
