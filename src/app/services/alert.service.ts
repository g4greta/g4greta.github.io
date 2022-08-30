import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  successAlert(text?:string){
    Swal.fire({
      title: 'Pubblicazione completata',
      text:   (_.isEmpty(text)) ? "Il materiale è ora disponibile sul portale web" : text,
      icon: 'success',
      heightAuto: false
    });
  }
  
  errorAlert(text?:string){
    Swal.fire({
      title: 'Errore pubblicazione',
      text:   (_.isEmpty(text)) ? "Il materiale non è stato pubblicato, riprova o contatta l'assistenza" : text,
      icon: 'error',
      heightAuto: false
    });
  }

  infoAlert(text?:string){
    Swal.fire({
      title: 'Info',
      text:   (_.isEmpty(text)) ? "Per qualsaisi altra informazione contatta l'assistenza" : text,
      icon: 'info',
      heightAuto: false
    });
  }

  confirmAlert(title:string, text?:string){
    return Swal.fire({
      title: title,
      text:   text,
      icon: 'question',
      showDenyButton: true,  showCancelButton: true,  
      heightAuto: false
    });
  }

  closeAlert(){
    Swal.close();
  }
}
