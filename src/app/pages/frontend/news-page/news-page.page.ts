import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

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


  constructor(private route: ActivatedRoute,
    private router: Router,
    private as: ArticleService) { 

    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');
    console.log(this.as.checkType(this.type))
    this.as.getArticle(this.id, this.as.checkType(this.type)).subscribe(res =>{
      console.log(res)
      this.article = res;
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
