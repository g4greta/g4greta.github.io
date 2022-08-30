import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from 'src/app/models/material.model';
import { MaterialService } from 'src/app/services/material.service';

import { materials } from 'src/environments/environment.prod';
@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss'],
})
export class MaterialsComponent implements OnInit {

  // materials = materials;
  // constructor() { }

  materials:Observable<Material[]>;

  constructor(
    private ms: MaterialService,
    ) {
      this.materials = this.ms.getMaterials();
  }






  ngOnInit() {}

}
