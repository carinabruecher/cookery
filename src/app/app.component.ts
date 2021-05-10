import { Component } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { TestModel } from './test-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  item: TestModel = {};
  testModelCollection: AngularFirestoreCollection<any>;
  list: Observable<TestModel[]>;

  constructor(
    private afs: AngularFirestore) {
    this.testModelCollection = afs.collection<TestModel>('TestModel');
  }

  ngOnInit(): void {
    this.list = this.testModelCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as TestModel;
        const id = a.payload.doc.id;
        return {id, ...data };
      }))
    );
  }

  public save(): void {
    this.testModelCollection.add(this.item);
    this.item = {};
  }
}
