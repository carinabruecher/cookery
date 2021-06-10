import { Component, Inject, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { User } from '../shared/services/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  user: User;

  constructor( public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.user = this.firebaseService.getUserData();
  }

  toLogout(){
    return this.firebaseService.logout();
   }

}
