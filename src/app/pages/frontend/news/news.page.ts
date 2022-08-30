import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
declare var $: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  articles:Observable<Article[]>;
  
  constructor(private as: ArticleService,
    private router: Router) {
    this.articles = this.as.getArticles();
   }

  ngOnInit() {
    $(".navbar").addClass('navbar-inverse');
  }

  goTo(id:string){
    this.router.navigate(['/news-page/'+id])
  }

  
}
