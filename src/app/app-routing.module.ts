import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { HomeComponent} from './home/home.component';
import { ListComponent} from './list/list.component';
import { PlanComponent} from './plan/plan.component';
import { RecepieComponent} from './recepie/recepie.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'list', component: ListComponent, canActivate: [AuthGuard]},
  { path: 'plan', component: PlanComponent, canActivate: [AuthGuard]},
  { path: 'rezept', component: RecepieComponent, canActivate: [AuthGuard]},
  { path: 'anmelden', component: SignInComponent},
  { path: 'regestrieren', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
