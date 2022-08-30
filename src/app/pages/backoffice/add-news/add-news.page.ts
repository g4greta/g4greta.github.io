import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

declare var $: any;
import * as _ from 'lodash';
import { AlertService } from 'src/app/services/alert.service';


import { Article } from '../../../models/article.model';
import { ArticleService } from '../../../services/article.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.page.html',
  styleUrls: ['./add-news.page.scss'],
})
export class AddNewsPage implements OnInit {

  private id: string;
  private isNew: boolean = false;
  quillConfiguration = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }],
      ['link'],
      ['clean'],
      ['image'],
      [{ 'align': [] }]
    ],
  }

  editorFrom: FormGroup;
  article: Article;
  type:string;
  
  constructor(private as: ArticleService,
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private al: AlertService) {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.type = this.activatedRoute.snapshot.paramMap.get('type');


    this.editorFrom = new FormGroup({
      'text': new FormControl('', [ Validators.required]),
      'subtitle': new FormControl('', [Validators.pattern('^[A-Za-z0-9èé,\. ]+$'), Validators.required]),
      'title': new FormControl('', [Validators.pattern('^[A-Za-z0-9èé,\. ]+$'), Validators.required]),
      'img': new FormControl('../../../../assets/imgs/bg-home.jpg')
    })
    

    if(!(_.isEmpty(this.id) || _.isNull(this.id) || _.isEqual('new', this.id))){
      try {
        this.as.getArticle(this.id,this.as.checkType(this.type)).subscribe(res => {
          console.log(res)
          this.editorFrom.patchValue(res);
        });
      } catch(error) {
          console.log(error)
      }
    } else {
      this.isNew = true;
    }


   }

  ngOnInit() {
  }

  onSubmit(){
    if(this.editorFrom.valid){
      if(this.isNew){
        this.as.addArticle(this.editorFrom.value, this.as.checkType(this.type))
      } else {
        this.as.updateArticle(this.id, this.editorFrom.value, this.as.checkType(this.type)).
          then(() => this.router.navigate(['/news']));
      }
      this.al.closeAlert();
    } else {
      this.al.errorAlert('I campi inseriti non rispettano le regole');
    }
  }

  onScroll(event) {
    if(event.detail.currentY > 0)
      $(".navbar").addClass('navbar-inverse');
    else 
      $(".navbar").removeClass('navbar-inverse');
  };



}

