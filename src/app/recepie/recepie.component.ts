import { Component, OnInit } from '@angular/core';
import { AddNewRecepieComponent } from './../add-new-recepie/add-new-recepie.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {TestModel} from '../test-model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.scss'],
})
export class RecepieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}


