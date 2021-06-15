import {Component, OnInit, Output} from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public firebaseService: FirebaseService,
               public router: Router) { }
  isSignedIn = true;

  ngOnInit(): void {
  }

}
