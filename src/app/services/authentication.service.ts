import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { FirebaseService } from './firebase.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertService } from './alert.service';
import jwt_decode from 'jwt-decode';
import { catchError, tap ,map, take} from 'rxjs/operators';
import { interval, lastValueFrom } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authState_ = new BehaviorSubject<boolean>(false); // <-- assign default value here
  readonly authState: ReplaySubject<boolean> = new ReplaySubject<boolean>(1)

  constructor(
    private router: Router,
    private platform: Platform,
    private auth: AngularFireAuth,
    private al: AlertService,
    private storage: Storage) { 
    this.storage.create();
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
  
  private ifLoggedIn(): void {
    this.getAuthToken().then((result)=>{
      console.log('qua' + result)
      if(!result){
        this.authState.next(false)
        this.logout();
      }else{
        this.authState.next(true);
      }
    });
  }


  public async isAuthenticated() {
    let res = this.authState.asObservable().pipe(take(1));
    return await lastValueFrom(res);
  }

  public getAuthToken(){
    return this.auth.currentUser.then((token) => {
      token.getIdToken(true).then((res) =>{

        let token:Object = jwt_decode(res)
        if(token['exp'] - this.getUnixEpochTime()> 0 ){
          return true;
        } else {
          return false;
        }
      }).catch(()=>{
        console.log('errore')
        this.router.navigate(['/login']);
        return false
      })
    }).catch(()=>{
      console.log('errore')
      this.router.navigate(['/login'])
      return false
    });
  }
 
  public login(email:string, password:string){
    this.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        if (res.user) {
          this.authState.next(true);
          this.auth.currentUser.then((token) => {
            token.getIdToken(true).then((res) =>{
              this.storage.set('USER_INFO', res).then((res_) => {
                this.router.navigate(['/dashboard']);
                this.authState.next(true);
              });
            });
          });
        }
      })
      .catch(() => {
        this.authState.next(false);
        this.al.errorAlert('Credenziali errate');
      });
  }

  public logout() {
    this.auth.signOut().then(() => {
      this.storage.remove('USER_INFO').then(() => {
        this.authState.next(false);
        this.router.navigate(['/login']);
      });
    });
  }

  private getUnixEpochTime() {
    return Math.round((new Date()).getTime() / 1000);
  }


}
