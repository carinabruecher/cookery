import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  isSignedIn = false;
  passwordSignup: string;

  constructor(
    public firebaseService: FirebaseService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  async onSignup(email: string, password: string): Promise<void> {
    await this.firebaseService.signup(email, password);
    if (this.firebaseService.isLoggedIn) {
      this.isSignedIn = true;
    }
    if (this.isSignedIn){
      this.router.navigate(['home']);
    }
  }
}
