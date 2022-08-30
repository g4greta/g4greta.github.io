import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  page: string;
  type:string;
  constructor(
    private router: Router,
    private as: AuthenticationService,
    private route: ActivatedRoute
    ) { 
    this.page = this.router.routerState.snapshot.url;
    this.type = this.route.snapshot.paramMap.get('type');
  }

  ngOnInit() {}

  logout(){
    this.as.logout();
  }

  

  



 

}
