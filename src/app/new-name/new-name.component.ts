import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FirebaseService } from '../services/firebase.service';
import { User } from '../shared/services/user';

@Component({
  selector: 'app-new-name',
  templateUrl: './new-name.component.html',
  styleUrls: ['./new-name.component.scss']
})
export class NewNameComponent implements OnInit {
  public newName: string;
  public user: User;

  constructor(public firebaseService: FirebaseService,
    public afs: AngularFirestore) { }

  ngOnInit(): void {

  }

  public save(): void {
    this.user.name = this.newName;
  }


}
