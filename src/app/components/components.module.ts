import { NgModule, CUSTOM_ELEMENTS_SCHEMA,LOCALE_ID} from "@angular/core";


import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";


import { TimelineComponent } from "./timeline/timeline.component";
import { MaterialsComponent } from "./materials/materials.component";
import { NavComponent } from "./nav/nav.component";
import {NgsRevealModule} from 'ngx-scrollreveal';
import { NewsComponent } from "./news/news.component";
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular'; 
import { FooterComponent } from "./footer/footer.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { NavBackofficeComponent } from "./nav-backoffice/nav-backoffice.component";
import { FooterBackofficeComponent } from "./footer-backoffice/footer-backoffice.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
    imports: [CommonModule,FormsModule, ReactiveFormsModule, NgsRevealModule, RouterModule,IonicModule,FontAwesomeModule
        // Keyboard
        ],
    declarations:[TimelineComponent, MaterialsComponent,NavComponent, NewsComponent, FooterComponent, SidenavComponent, NavBackofficeComponent,FooterBackofficeComponent],
    exports: [TimelineComponent, MaterialsComponent, NavComponent, NewsComponent, FooterComponent, SidenavComponent, NavBackofficeComponent,FooterBackofficeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [{
      provide: LOCALE_ID,
      useValue: 'it-IT' // 'de-DE' for Germany, 'fr-FR' for France ...
    },
  ]
})
export class ComponentsModule{}