import { Injectable, Query } from '@angular/core';
import { RecepieModel } from './recepie-model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class RecepieService {

  constructor(private angularFirestore: AngularFirestore) {
  }

  setFavorit(recepie: RecepieModel, id) {
    return this.angularFirestore
      .collection('RecepieModel')
      .doc(id)
      .update({
        favorit: !recepie.favorit
      });
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
        difficulty: recepie.difficulty
      });
  }
  get30(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('time', '<=', '30')
  }

  get3060(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('time', '>', '30')
  }

  get60(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('time', '>', '60')
  }

  getPizza(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('categorie', '==', 'Pizza')
  }

  getPasta(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('categorie', '==', 'Pasta')
  }

  getFleisch(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('categorie', '==', 'Fleich')
  }

  getFisch(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('categorie', '==', 'Fisch')
  }

  getSuppe(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('categorie', '==', 'Suppe')
  }

  getSalat(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('categorie', '==', 'Salat')
  }

  getVorspeise(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('categorie', '==', 'Vorspeise')
  }

  getNachspeise(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('categorie', '==', 'Nachspeise')
  }

  getNormal(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('diet', '==', 'normal')
  }

  getVegetarisch(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('diet', '==', 'vegetraisch')
  }

  getvegan(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('diet', '==', 'vegan')
  }

  getlowcarb(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('diet', '==', 'low carb')
  }

  getleicht(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('difficulty', '==', 'leicht')
  }

  getmittel(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('difficulty', '==', 'mittel')
  }

  getschwer(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('difficulty', '==', 'schwer')
  }

  getFav(){
    return this.angularFirestore.collection('RecepieModel')
    .ref.where('favorit', '==', true)
  }
}
