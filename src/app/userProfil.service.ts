import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class userProfilServices {

  constructor(private angularFirestore: AngularFirestore) {
  }

  getUserDoc(id) {
    return this.angularFirestore
      .collection('userProfile')
      .doc(id)
      .valueChanges();
  }

  getUserList() {
    return this.angularFirestore
      .collection('userProfile')
      .snapshotChanges();
  }

  deleteUser(recepie) {
    return this.angularFirestore
      .collection('userProfile')
      .doc(recepie.id)
      .delete();
  }
}
