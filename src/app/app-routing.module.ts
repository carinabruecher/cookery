import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { ListComponent} from './list/list.component';
import { PlanComponent} from './plan/plan.component';
import { RecepieComponent} from './recepie/recepie.component';
import { AddNewRecepieComponent } from './add-new-recepie/add-new-recepie.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { VerifyMailComponent} from './verify-mail/verify-mail.component';
import { EditRecepieComponent } from './edit-recepie/edit-recepie.component';
import { ProfilComponent } from './profil/profil.component';
import { HaushaltComponent } from './haushalt/haushalt.component';
import { NewNameComponent } from './new-name/new-name.component';
import { ListOverviewComponent } from './list-overview/list-overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'list', component: ListComponent, canActivate: [AuthGuard]},
  { path: 'plan', component: PlanComponent, canActivate: [AuthGuard]},
  { path: 'rezept', component: RecepieComponent, canActivate: [AuthGuard]},
  { path: 'anmelden', component: SignInComponent},
  { path: 'regestrieren', component: SignUpComponent},
  { path: 'passwortzurücksetzen', component: PasswordResetComponent},
  { path: 'userMgmt', component: UserManagementComponent},
  { path: 'verifyMail', component: VerifyMailComponent},
  { path: 'add-new-recepie', component: AddNewRecepieComponent, canActivate: [AuthGuard]},
  { path: 'edit-recepie/:id', component: EditRecepieComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: ProfilComponent, canActivate: [AuthGuard]},
  { path: 'haushalt', component: HaushaltComponent, canActivate: [AuthGuard]},
  { path: 'name-ändern', component: NewNameComponent, canActivate: [AuthGuard]},
  { path: 'list-overview', component: ListOverviewComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
