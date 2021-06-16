import { Component, OnInit, Input, NgModule } from '@angular/core';
import { RecepieService} from '../recepie.service';
import { RecepieModel} from '../recepie-model';
import { AddNewRecepieComponent } from './../add-new-recepie/add-new-recepie.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {TestModel} from '../test-model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.scss'],
})
export class RecepieComponent implements OnInit {
  Recepies: RecepieModel[];
  chosenTime: string;
  chosenCategorie: string;
  chosenDiet: string;
  chosenDifficulty: string;
  router: Router;

  constructor(private recepieService: RecepieService,
    private database: AngularFirestore) { }

  @Input() recepietitle: string; picture: string; categorie: string; diet: string; difficulty: string; ingredients: string; nutrition: string; preparation: string; time: string; favorit: boolean;
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

    this.chosenTime = "Zubereitungszeit";
    this.chosenCategorie = "Kategorie";
    this.chosenDiet = "Ernährungsform";
    this.chosenDifficulty = "Schwierigkeitsgrad";
  }

  setFav(recepie, id){
    this.recepieService.setFavorit(recepie, id)
  }

  getTime(){
    switch(this.chosenTime){
      case "30": {
        this.database.collection('RecepieModul').ref.where('time', '<=', '30').get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
      case "30-60": {
        this.database.collection('RecepieModul').ref.where('time', '>', '30').where('time', '<=', '60').get()
          .then((querySnapshot) => {
            querySnapshot.forEach( data => {
              console.log(data.data() as object);
            });
          });
          break;
      }
      case "60": {
        this.database.collection('RecepieModul').ref.where('time', '>', '60').get()
          .then((querySnapshot) => {
            querySnapshot.forEach( data => {
             console.log(data.data() as object);
          });
        });
        break;
      }
    }
  }

  getCategorie(){
    switch(this.chosenCategorie){
      case "Pizza": {
        this.database.collection('RecepieModul').ref.where('categorie', '==', this.chosenCategorie).get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
      case "Pasta": {
        this.database.collection('RecepieModul').ref.where('categorie', '==', this.chosenCategorie).get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
      case "Fleisch": {
        this.database.collection('RecepieModul').ref.where('categorie', '==', this.chosenCategorie).get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
      case "Fisch": {
        this.database.collection('RecepieModul').ref.where('categorie', '==', this.chosenCategorie).get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
      case "Suppe": {
        this.database.collection('RecepieModul').ref.where('categorie', '==', this.chosenCategorie).get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
      case "Salat": {
        this.database.collection('RecepieModul').ref.where('categorie', '==', this.chosenCategorie).get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
      case "Vorspeise": {
        this.database.collection('RecepieModul').ref.where('categorie', '==', this.chosenCategorie).get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
      case "Nachspeise": {
        this.database.collection('RecepieModul').ref.where('categorie', '==', this.chosenCategorie).get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
    }
  }

  getDiet(){
    switch(this.chosenDiet){
      case "normal": {
        this.database.collection('RecepieModul').ref.where('categorie', '==', this.chosenDiet).get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
      case "vegetarisch": {
        this.database.collection('RecepieModul').ref.where('categorie', '==', this.chosenDiet).get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
      case "vegan": {
        this.database.collection('RecepieModul').ref.where('categorie', '==', this.chosenDiet).get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
      case "low carb": {
        this.database.collection('RecepieModul').ref.where('categorie', '==', this.chosenDiet).get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
    }
  }

  getDifficulty(){
    switch(this.chosenDifficulty){
      case "leicht": {
        this.database.collection('RecepieModul').ref.where('categorie', '==', this.chosenDifficulty).get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
      case "mittel": {
        this.database.collection('RecepieModul').ref.where('categorie', '==', this.chosenDifficulty).get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
      case "schwer": {
        this.database.collection('RecepieModul').ref.where('categorie', '==', this.chosenDifficulty).get()
        .then((querySnapshot) => {
           querySnapshot.forEach( data => {
            console.log(data.data() as object);
           });
        });
        break;
      }
    }
  }

  getFav(){
    this.recepieService.getFav().get().then((querySnapshot) =>{
      querySnapshot.forEach(data => {
        this.Recepies.push(data.data() as object);
      })
    })
  }

  getAll(){
    this.ngOnInit();
  }

  removeRecepie = recepie => this.recepieService.deleteRecepie(recepie);
}
