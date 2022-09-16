import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { MetatagsService } from 'src/app/services/metatags.service';

declare var $: any;
@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.page.html',
  styleUrls: ['./news-page.page.scss'],
})
export class NewsPagePage implements OnInit {

  id:string;
  article:Article;
  type:string;


  constructor(
    private route: ActivatedRoute,
    private as: ArticleService,
    private meta: MetatagsService,
    ) { 

    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');
    
    this.as.getArticle(this.id, this.as.checkType(this.type)).subscribe(res =>{
      this.article = res;
      this.meta.setTitle('G4Greta | ' + this.article.title);
      this.meta.setSocialTag(
        this.article.title,
        this.article.subtitle,
        this.article.img,
        this.article.id
      );
    });

  }
 
  ngOnInit() {
  }



  onScroll(event) {
    if(event.detail.currentY > 0)
      $(".navbar").addClass('navbar-inverse');
    else 
      $(".navbar").removeClass('navbar-inverse');
  };
}
