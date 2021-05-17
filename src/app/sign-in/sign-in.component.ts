import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public fehler: boolean;

  isSignedIn = false;

  constructor(
    public firebaseService: FirebaseService
  ) {
    this.fehler = false;
  }

  ngOnInit(): void {
  }

  async onSignin(email: string, password: string): Promise<void> {
    await this.firebaseService.signin(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
    } else {
      this.fehler = true;
    }}
}
