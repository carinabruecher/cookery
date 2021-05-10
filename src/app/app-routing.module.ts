import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { ListComponent} from './list/list.component';
import { PlanComponent} from './plan/plan.component';
import { RecepieComponent} from './recepie/recepie.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'list', component: ListComponent},
  { path: 'plan', component: PlanComponent},
  { path: 'rezept', component: RecepieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
