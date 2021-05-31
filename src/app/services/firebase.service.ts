import {Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth } from 'firebase/firebase-auth';
import { Globals} from '../../app/global';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public firebaseAuth: AngularFireAuth,
              public router: Router,
              public firestore: AngularFirestore,
              public afs: AngularFirestore,
              public globals: Globals) {

    this.firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        globals.isLoggedIn = true;
      } else {
        globals.isLoggedIn = false; 
      }
    });
  }

  getAuth(){
    return this.firebaseAuth.authState;
  }

  async signin(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.globals.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['home']);
      });
  }

  /*async signup(email: string, password: string){
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then (res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['home']);
      });
  }*/
  async signup(
    email: string,
    password: string
  ): Promise<auth.UserCredential> {
    try {
      const newUserCredential: auth.UserCredential = await this.firebaseAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await this.firestore
        .doc(`userProfile/${newUserCredential.user.uid}`)
        .set({ email });
      /*
        Here we add the functionality to send the email.
      */
      await newUserCredential.user.sendEmailVerification();

      return newUserCredential;
    } catch (error) {
      throw alert('Es ist ein Fehler aufgetreten.');
    }
  }

  logout(){
    return this.firebaseAuth.signOut().then(() => {
      this.router.navigate(['anmelden']);
      localStorage.removeItem('user');
    });
  }

  resetPasswordInit (email: string){
    return this.firebaseAuth.sendPasswordResetEmail(
      email,
      { url: 'http://localhost:4200/auth/userMgmt'}
    );
  }
}
