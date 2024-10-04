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
import { Info } from '../models/info.model';
import * as moment from 'moment';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private readonly infoCollection = 'info';

  constructor(
    private readonly firestore: AngularFirestore, 
    private readonly fs: FirebaseService,
    private al: AlertService) { }

  getInfo(date=false): Observable<Info>{
    if(date)
      return this.firestore.collection<Info>(this.infoCollection).doc('mkPJcJxLghpUo4OxYDyu').valueChanges();
    else 
      return this.firestore.collection<Info>(this.infoCollection).doc('xowVenNjbYxpB6EXmGNh').valueChanges();
  }

  isFormAvaiable(){
    const DATE_FORMAT = "YYYY-MM-DD";
    this.getInfo(true).subscribe((res) => {
      let date  = moment(res.value).format(DATE_FORMAT);
      var now = moment().format(DATE_FORMAT);

      if(now > date){
        this.getInfo().subscribe((link) => {
          window.open(link.value, "_blank");
        });
      } else {
        // this.al.infoAlert('Le indicazioni sulle modalità di sottomissione sono accessibili al seguente ' + 
        // "<a href='' target='_blank' >Link</a>");
        this.al.infoAlert('Le istruzioni di sottomissione dei progetti di App Green verranno pubblicate a Febbraio 2024');
      }
    })
  }
}
