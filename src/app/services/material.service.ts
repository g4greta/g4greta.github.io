import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Material } from '../models/material.model';
import { FirebaseService } from './firebase.service';
import { finalize, tap, last, map, mergeMap } from 'rxjs/operators';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { FILE } from '../models/file.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private readonly materialsCollection = 'materials';

  ngFireUploadTask: AngularFireUploadTask;

  progressNum: Observable<number>;

  progressSnapshot: Observable<any>;

  fileUploadedPath: Observable<string>;

  files: Observable<FILE[]>;

  FileName: string;
  FileSize: number;

  isImgUploading: boolean;
  isImgUploaded: boolean;





  constructor(private readonly firestore: AngularFirestore, 
              private readonly fs: FirebaseService,
              private angularFireStorage: AngularFireStorage) { 

              this.isImgUploading = false;
              this.isImgUploaded = false;
  }

  addMaterial(material: Material) {
    const id = this.firestore.createId()
    material.created = this.fs.getServerTimestamp();
    material.deleted = 0;
    material.updated = this.fs.getServerTimestamp();
    material.id = id;
    return this.firestore.doc(`${this.materialsCollection}/${id}`).set(material);
  }

  getMaterials(): Observable<Material[]> {
    return this.firestore.collection<Material>(this.materialsCollection).valueChanges();
  }

  getMaterial(id:string): Observable<Material>{
    return this.firestore.collection(this.materialsCollection).doc<Material>(id).valueChanges();
  }

  updateMaterial(id:string, material:Material){
    material.updated = this.fs.getServerTimestamp();
    return this.firestore.collection(this.materialsCollection).doc(id).update(material);
  }

  deleteMaterial(id:string, material:Material){
    return this.firestore.doc(`${this.materialsCollection}/${id}`).delete();
  }


  fileUpload(event) {

    const file = event.target.files.item(0)
    this.isImgUploading = true;
    this.isImgUploaded = false;

    this.FileName = file.name;

    const fileStoragePath = `filesStorage/${new Date().getTime()}_${file.name}`;

    const imageRef = this.angularFireStorage.ref(fileStoragePath);

    this.ngFireUploadTask = this.angularFireStorage.upload(fileStoragePath, file);

    this.progressNum = this.ngFireUploadTask.percentageChanges();
    return this.ngFireUploadTask.snapshotChanges().pipe(
      
      // finalize(() => {
      //   this.fileUploadedPath = imageRef.getDownloadURL();
        
      //   this.fileUploadedPath.subscribe(resp=>{
         
      //     this.isImgUploading = false;
      //     this.isImgUploaded = true;
      //   },error => {
      //     console.log(error);
      //   })
       
      // }),
      // tap(snap => {
      //     this.FileSize = snap.totalBytes;
          
      // })
      last(),
      mergeMap(() => {
          const url = imageRef.getDownloadURL();
          console.log('download url is ',url);
          return url;
      })
    )
  return imageRef.getDownloadURL();
    
  }


  
}
