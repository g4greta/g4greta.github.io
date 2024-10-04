import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { InfoService } from 'src/app/services/info.service';

declare var $: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent  implements OnInit{

  constructor(private router: Router,
    public is: InfoService) {
   
  }

  ngOnInit() {
  }

  toggleMenu() {
    $("#navbarSupportedContent").toggleClass('collapse');
    if($("#navbarSupportedContent").hasClass('collapse'))
      $("#hamburger-icon").attr('name', 'menu-outline');
    else  
      $("#hamburger-icon").attr('name', 'close-outline');
    
  }


  

  

}
