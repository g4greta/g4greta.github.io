import { Component, OnInit } from '@angular/core';
import { MetatagsService } from './services/metatags.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(
    private meta: MetatagsService
  ) {}

  ngOnInit(): void {
    this.meta.setMeta();
    this.meta.setTitle('G4Greta');
  }



}
