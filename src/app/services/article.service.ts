import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  
} from '@angular/fire/compat/firestore';


import { map, Observable } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { AlertService } from './alert.service';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private readonly articlesCollection = 'articles';
  private readonly pagesCollection = 'pages';

  constructor(
    private readonly firestore: AngularFirestore, 
    private readonly fs: FirebaseService,
    private al: AlertService) { }

  addArticle(article: Article, pages=false) {
    // const id = this.firestore.createId();
    article.created = this.fs.getServerTimestamp();
    article.deleted = 0;
    article.updated = this.fs.getServerTimestamp();
    // article.id = id;
    // return this.firestore.doc(`${(!pages) ? this.articlesCollection: this.pagesCollection }/${id} `).set(article);

    this.firestore.collection(`${(!pages) ? this.articlesCollection: this.pagesCollection }`).add(article)
      .then(ref => {
        console.log(`${(!pages) ? this.articlesCollection: this.pagesCollection }`)
        console.log(article)
        ref.set({ id: ref.id }, { merge: true }).then(() => {
          console.log("Your extra id field has been created");
          console.log(ref.id)
        });
        this.al.successAlert();
      }).catch(() =>{
        this.al.errorAlert();
      });
  }

  getArticles(pages=false): Observable<Article[]> {
    return this.firestore.collection<Article>((!pages) ? this.articlesCollection: this.pagesCollection ).valueChanges();
  }

  getArticle(id:string, pages=false): Observable<Article>{
    return this.firestore.collection<Article>((!pages) ? this.articlesCollection: this.pagesCollection ).doc(id).valueChanges();
  }

  updateArticle(id:string, article:Article, pages=false){
    article.updated = this.fs.getServerTimestamp();
    return this.firestore.collection((!pages) ? this.articlesCollection: this.pagesCollection ).doc(id).update(article);
  }

  deleteArticle(id:string,  article:Article){
    // return this.firestore.doc('articles/7vo65y1gXaevGUzGEujo').delete();
    // return this.firestore.doc(`${this.articlesCollection}/${id}`).delete();
    return this.firestore.collection<Article>(this.articlesCollection).doc(id).delete();

  }

  checkType(type:string):boolean{
    if(type==="pages")
      return true
    return false
  }



}
