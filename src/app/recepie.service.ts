import { Injectable } from '@angular/core';
import { RecepieModel } from './recepie-model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class RecepieService {

  constructor(private angularFirestore: AngularFirestore) {
  }

  getRecepieDoc(id) {
    return this.angularFirestore
      .collection('RecepieModel')
      .doc(id)
      .valueChanges();
  }

  getRecepieList() {
    return this.angularFirestore
      .collection('RecepieModel')
      .snapshotChanges();
  }

  deleteRecepie(recepie) {
    return this.angularFirestore
      .collection('RecepieModel')
      .doc(recepie.id)
      .delete();
  }

  updateRecepie(recepie: RecepieModel, id) {
    return this.angularFirestore
      .collection('RecepieModel')
      .doc(id)
      .update({
        recepietitle: recepie.recepietitle,
        nutrition: recepie.nutrition,
        categorie: recepie.categorie,
        diet: recepie.diet,
        ingredients: recepie.ingredients,
        preparation: recepie.preparation,
        time: recepie.time,
        difficulty: recepie.difficulty,
        favorit: recepie.favorit
      });
  }
}
