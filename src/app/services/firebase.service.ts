import { Injectable } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  getServerTimestamp():number {
    return Timestamp.now().seconds;
  }
}
