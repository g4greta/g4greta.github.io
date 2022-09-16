import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { MetatagsService } from 'src/app/services/metatags.service';

declare var $: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  articles:Observable<Article[]>;
  
  constructor(
    private as: ArticleService,
    private router: Router,
    private meta: MetatagsService
    ) {
    this.articles = this.as.getArticles();
    this.meta.setTitle('G4Greta | News');
    this.meta.updateMeta(
      'description',
      'Il progetto G4GRETA (Girls for Green technology Applications) ha come obiettivo di appassionare un maggior numero di ragazze all’uso delle tecnologie dell’ICT (Information and Communication Technology) mostrando come queste tecnologie, insieme ad altre, siano di grande supporto alla sostenibilità ambientale, e - se saremo capaci di sfruttarle - ci aiuteranno a salvare il Pianeta.'
    );
  }

  ngOnInit() {
    $(".navbar").addClass('navbar-inverse');
  }

  goTo(id:string){
    this.router.navigate(['/news-page/'+id])
  }

  
}
