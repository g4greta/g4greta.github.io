import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { articles } from 'src/environments/environment.prod';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {

  articles:Observable<Article[]>;

  constructor(
    private as: ArticleService) { 
      this.articles = this.as.getArticles();
  }

  ngOnInit() {}

}
