import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToDolModel } from '../ToDo-model';
import { ToDolServices } from '../ToDo.service';

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.component.html',
  styleUrls: ['./list-overview.component.scss']
})
export class ListOverviewComponent implements OnInit {
  public editForm: FormGroup;
  todo: ToDolModel[];
  todoRef: any;

  constructor(
    public todoService: ToDolServices,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,

  ) {
      this.editForm = this.formBuilder.group({
        description: ['']
      })
     }

  @Input() titel:string; description:String;
  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.todoService.getToDoDoc(id).subscribe(res => {
      this.todoRef = res;
      this.editForm = this.formBuilder.group({
        description: [this.todoRef.description]
      })
    })
  }

  obSubmit(){
    const id = this.act.snapshot.paramMap.get('id');

    this.todoService.updateToDo(this.editForm.value, id);
  }

}
