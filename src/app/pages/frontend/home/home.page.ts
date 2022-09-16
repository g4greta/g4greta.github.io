import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { AlertService } from 'src/app/services/alert.service';
import { ArticleService } from 'src/app/services/article.service';
import { InfoService } from 'src/app/services/info.service';
import { MetatagsService } from 'src/app/services/metatags.service';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  articles:Observable<Article[]>;

  constructor(
    private as: ArticleService,
    public is: InfoService,
    private meta: MetatagsService
    ) { 
  }

  ngOnInit() {
    this.meta.setTitle('G4Greta | Home');
    this.meta.updateMeta(
      'description',
      'Il progetto G4GRETA (Girls for Green technology Applications) ha come obiettivo di appassionare un maggior numero di ragazze all’uso delle tecnologie dell’ICT (Information and Communication Technology) mostrando come queste tecnologie, insieme ad altre, siano di grande supporto alla sostenibilità ambientale, e - se saremo capaci di sfruttarle - ci aiuteranno a salvare il Pianeta.'
    );

    this.meta.setSocialTag(
      'Home',
      'Il progetto G4GRETA (Girls for Green technology Applications) ha come obiettivo di appassionare un maggior numero di ragazze all’uso delle tecnologie dell’ICT (Information and Communication Technology) mostrando come queste tecnologie, insieme ad altre, siano di grande supporto alla sostenibilità ambientale, e - se saremo capaci di sfruttarle - ci aiuteranno a salvare il Pianeta.',
      'src/assets/imgs/coding.jpg',
      '',
      true
    );
  }


  onScroll(event) {
    if(event.detail.currentY > 0)
      $(".navbar").addClass('navbar-inverse');
    else 
      $(".navbar").removeClass('navbar-inverse');
  };



 

  
  

}
