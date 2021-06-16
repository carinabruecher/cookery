import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { ToDolModel } from './ToDo-model';


@Injectable({
  providedIn: 'root'
})
export class ToDolServices {

  constructor(private angularFirestore: AngularFirestore) {
  }

  getToDoDoc(id) {
    return this.angularFirestore
      .collection('ToDo')
      .doc(id)
      .valueChanges();
  }

  getToDoList() {
    return this.angularFirestore
      .collection('ToDo')
      .snapshotChanges();
  }

  deleteToDo(todo) {
    return this.angularFirestore
      .collection('ToDo')
      .doc(todo.id)
      .delete();
  }

  updateToDo(todo: ToDolModel, id) {
    return this.angularFirestore
      .collection('Todo')
      .doc(id)
      .update({
        titel: todo.titel,
        description: todo.description
      });
  }
}
