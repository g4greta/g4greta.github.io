import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';
import { AlertService } from 'src/app/services/alert.service';
import { ArticleService } from 'src/app/services/article.service';
declare var $: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  articles:Observable<Article[]>;
  type:string;
  
  constructor(
    public as: ArticleService,
    private al: AlertService,
    private route: ActivatedRoute) { 
      this.type = this.route.snapshot.paramMap.get('type');
      this.articles = this.as.getArticles(this.as.checkType(this.type));
      this.articles.subscribe((res) => {
        console.log(res)
      })
  }

  ngOnInit() {
  }

  delete(id: string, article:Article){
    this.al.confirmAlert('Sicuro di voler eleminare l\'elemento selezionato').then((result) => {  
      if (result.isConfirmed) {   
          this.as.deleteArticle(id, article);
        
      } else if (result.isDenied) {    
        return ;
     }
     this.al.closeAlert();
    });   
  }

  // toggleMenu() {
  //   $("#sidebar").toggleClass('collapsed');
  // }

 

}
