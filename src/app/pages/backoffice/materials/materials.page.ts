import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from 'src/app/models/material.model';
import { MaterialService } from 'src/app/services/material.service';
import { AlertService} from 'src/app/services/alert.service';
import { AlternativeServiceOptions } from 'http2';
declare var $: any;

@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
})
export class MaterialsPage implements OnInit {

  materials:Observable<Material[]>;
  
  constructor(private readonly ms: MaterialService,
    private al: AlertService) { 
    this.materials = this.ms.getMaterials();
  }

  ngOnInit() {
  }

  delete(id: string, material:Material){
    this.al.confirmAlert('Sicuro di voler eleminare l\'elemento selezionato').then((result) => {  
      if (result.isConfirmed) {    
        this.ms.deleteMaterial(id, material);
      } else if (result.isDenied) {    
        return ;
     }
     this.al.closeAlert();
    });   
  }

 



}
