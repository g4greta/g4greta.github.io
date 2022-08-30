import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMaterialPageRoutingModule } from './add-material-routing.module';

import { AddMaterialPage } from './add-material.page';
import { ReactiveFormsModule} from '@angular/forms';

import { ComponentsModule } from 'src/app/components/components.module';
import { FileSizePipe } from 'src/app/pipes/file-size.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMaterialPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [AddMaterialPage, FileSizePipe]
})
export class AddMaterialPageModule {}
