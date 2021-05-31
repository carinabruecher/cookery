import { Component } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { RecepieModel } from './../recepie-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-new-recepie',
  templateUrl: './add-new-recepie.component.html',
  styleUrls: ['./add-new-recepie.component.scss']
})
export class AddNewRecepieComponent {
  item: RecepieModel = {};
  recepieModelCollection: AngularFirestoreCollection<any>;
  list: Observable<RecepieModel[]>;

  constructor(
    private afs: AngularFirestore) {
    this.recepieModelCollection = afs.collection<RecepieModel>('RecepieModel');
  }

  ngOnInit(): void {
    this.list = this.recepieModelCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as RecepieModel;
        const id = a.payload.doc.id;
        return {id, ...data };
      }))
    );
  }

  public save(): void {
    this.recepieModelCollection.add(this.item);
    this.item = {};
  }

}