import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ToDolModel } from '../ToDo-model';
import { ToDolServices } from '../ToDo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todo: ToDolModel[];
  item: ToDolModel = {};
  ToDolCollection: AngularFirestoreCollection<any>;
  list: Observable<ToDolModel[]>;

  constructor(private todoService: ToDolServices,
    private afs: AngularFirestore) {
      this.ToDolCollection = afs.collection<ToDolModel>('ToDo');
     }

  @Input() titel:string; description:String;
  ngOnInit(): void {
    this.todoService.getToDoList().subscribe(res => {
      this.todo = res.map( e => {
        console.log(e.payload.doc.data() as object);
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as ToDolModel;
      })
    })

    this.list = this.ToDolCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ToDolModel;
        const id = a.payload.doc.id;
        return {id, ...data };
      }))
    );
  }

  public save(): void {
    this.ToDolCollection.add(this.item);
    this.item = {};

  }

  removeListe = todo => this.todoService.deleteToDo(todo);

}
