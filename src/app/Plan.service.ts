import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { PlanModel } from './Plan-model';


@Injectable({
  providedIn: 'root'
})
export class PlanServices {

  constructor(private angularFirestore: AngularFirestore) {
  }

  getPlanDoc(id) {
    return this.angularFirestore
      .collection('Plan')
      .doc(id)
      .valueChanges();
  }

  getPlanList() {
    return this.angularFirestore
      .collection('Plan')
      .snapshotChanges();
  }

  deletePlan(plan) {
    return this.angularFirestore
      .collection('Plan')
      .doc(plan.id)
      .delete();
  }

  updatePlpan(plan: PlanModel, id) {
    return this.angularFirestore
      .collection('Todo')
      .doc(id)
      .update({
        A1: plan.A1,
        A2: plan.A2,
        A3: plan.A3,
        A4: plan.A4,
        A5: plan.A5,
        A6: plan.A6,
        A7: plan.A7,
        M1: plan.M1,
        M2: plan.M2,
        M3: plan.M3,
        M4: plan.M4,
        M5: plan.M5,
        M6: plan.M6,
        M7: plan.M7,
      });
  }
}
