import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  currentDate = new Date();
  constructor() {
  }

  ngOnInit() {
  }

  // toggleMenu() {
  //   $("#sidebar").toggleClass('collapsed');
  // }

 
}
