import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewsPageRoutingModule } from './add-news-routing.module';

import { AddNewsPage } from './add-news.page';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule} from '@angular/forms';

import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewsPageRoutingModule,
    QuillModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [AddNewsPage]
})
export class AddNewsPageModule {}
