import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PlanComponent } from './plan/plan.component';
import { ListComponent } from './list/list.component';
import { RecepieComponent } from './recepie/recepie.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { SignInComponent } from './sign-in/sign-in.component';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { VerifyMailComponent } from './verify-mail/verify-mail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddNewRecepieComponent } from './add-new-recepie/add-new-recepie.component';
import { EditRecepieComponent } from './edit-recepie/edit-recepie.component';
import { ProfilComponent } from './profil/profil.component';
import { NewNameComponent } from './new-name/new-name.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    ListComponent,
    RecepieComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    PasswordResetComponent,
    UserManagementComponent,
    VerifyMailComponent,
    AddNewRecepieComponent,
    EditRecepieComponent,
    ProfilComponent,
    NewNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    PasswordStrengthMeterModule,
    NgbModule


  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
