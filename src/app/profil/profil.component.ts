import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor( public firebaseService: FirebaseService ) { }

  ngOnInit(): void {
  }

  toLogout(){
    return this.firebaseService.logout();
   }

}
