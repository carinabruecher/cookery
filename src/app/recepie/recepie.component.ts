import { Component, OnInit, Input } from '@angular/core';
import { RecepieService} from '../recepie.service';
import { RecepieModel} from '../recepie-model';
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
  Recepies: RecepieModel[];

  constructor(private recepieService: RecepieService) { }

  @Input() recepietitle: string; picture: string; categorie: string; diet: string; difficulty: string; ingredients: string; nutrition: string; preparation: string; time: string;
  ngOnInit() {
    this.recepieService.getRecepieList().subscribe(res => {
      this.Recepies = res.map( e => {
        console.log(e.payload.doc.data() as object);
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as object)
        } as RecepieModel;
      });
    });
  }

  removeRecepie = recepie => this.recepieService.deleteRecepie(recepie);
}
