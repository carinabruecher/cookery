import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  constructor( public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  resetPassword(email: string) {
    if (!email){
      alert('Gib erst deine E-Mail an.');
    }

    this.firebaseService.resetPasswordInit(email)
      .then(
        () => alert('Ein Passwort zurücksetzten Link wurde an die Mail gesendet.'),
        (rejectionReason) => alert(rejectionReason))
      .catch(e => alert('Es ist ein Fehler aufgetreten.'));
  }
}
