import { Component, OnInit } from '@angular/core';
import { timelines } from 'src/environments/environment.prod';
import {NgsRevealConfig} from 'ngx-scrollreveal';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  providers: [NgsRevealConfig]
})
export class TimelineComponent implements OnInit {
  timelines = timelines
 
  
  constructor(config: NgsRevealConfig) {
    // customize default values of ngx-scrollreveal directives used by this component tree
    config.duration = 5000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
 
    //other options here
  }


  ngOnInit() {}

  



}
