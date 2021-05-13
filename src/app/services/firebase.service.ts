import {Injectable, NgZone} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn: boolean;
  constructor(public firebaseAuth: AngularFireAuth,
              public router: Router,
              public afs: AngularFirestore) {
    this.isLoggedIn = false;

    this.firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }


  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['']);
      })
  }

  async signup(email: string, password: string){
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then (res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['']);
      });
  }

  logout(){
    return this.firebaseAuth.signOut().then(() => {
      this.router.navigate(['sign-in']);
      localStorage.removeItem('user');
    });
  }
}
