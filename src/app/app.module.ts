import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { QuillModule } from 'ngx-quill';
// Import the functions you need from the SDKs you need
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from '../environments/environment.prod';
import { LOCALE_ID } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage-angular';


import it from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';
import { FileSizePipe } from './pipes/file-size.pipe';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { library } from '@fortawesome/fontawesome-svg-core';



registerLocaleData(it);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            AppRoutingModule, 
            IonicStorageModule.forRoot(),
            QuillModule.forRoot(),
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFirestoreModule.enablePersistence(),
            AngularFireAuthModule,
            AngularFirestoreModule,
            AngularFireStorageModule,
            AngularFireDatabaseModule,
            FontAwesomeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, { provide: LOCALE_ID, useValue: "it-IT" }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  
  
  constructor(library: FaIconLibrary) { 

    
    const icons=[faFacebookF];
		library.addIconPacks(fas, fab, far);
	}

}
