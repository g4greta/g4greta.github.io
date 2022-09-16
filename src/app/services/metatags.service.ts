import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetatagsService {

  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  setMeta(){
    this.meta.addTags([
      { name: 'keywords', content: 'App, Girl, Ragazze, AppInventor, Pitch, Scuola superiore, Coding, IOS, Android, Roma, Lazio' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content:'viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { name: 'description', content: 'Il progetto G4GRETA (Girls for Green technology Applications) ha come obiettivo di appassionare un maggior numero di ragazze all’uso delle tecnologie dell’ICT (Information and Communication Technology) mostrando come queste tecnologie, insieme ad altre, siano di grande supporto alla sostenibilità ambientale, e - se saremo capaci di sfruttarle - ci aiuteranno a salvare il Pianeta.'},
    ])
  }

  updateMeta(name:string, content:string):void{
    this.meta.updateTag({
      name: name, 
      content: content
    });
  }

  setTitle(title:string):void {
    this.title.setTitle(title);
  }

  getTitle():string {
    return this.title.getTitle();
  }

  setSocialTag(title:string, description:string, img:string, id:string, home=false):void{
      this.meta.updateTag({ name: 'description', content: description});
      
      this.meta.updateTag({ name: 'twitter:card', content: "summary_large_image"});
      this.meta.updateTag({ name: 'twitter:title', content: title});
      this.meta.updateTag({ name: 'twitter:description', content: description});
      this.meta.updateTag({ name: 'twitter:image', content: img});
      this.meta.updateTag({ name: 'twitter:image:alt ', content: 'Immagine ragazze coding'});
      this.meta.updateTag({ name: 'twitter:site', content: "g4greta.di.uniroma1.it"});
      this.meta.updateTag({ name: 'twitter:creator', content: 'G4Greta'});

      this.meta.updateTag({ name: 'og:title', content: title});
      this.meta.updateTag({ name: 'og:description', content: description});
      this.meta.updateTag({ name: 'og:url', 
        content: home == true ? '"https://g4greta.di.uniroma1.it/' : "https://g4greta.di.uniroma1.it/news-page/" + id
      });
      this.meta.updateTag({ name: 'og:image', content: img});
      this.meta.updateTag({ name: 'og:image:alt', content: 'Immagine ragazze coding'});
      this.meta.updateTag({ name: 'og:site_name', content: "g4greta.di.uniroma1.it"});
      this.meta.updateTag({ name: 'og:locale', content: "it_IT"});
      this.meta.updateTag({ name: 'og:type', content: "article"});
  }
}
