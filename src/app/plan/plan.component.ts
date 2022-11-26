import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PlanModel } from '../Plan-model';
import { PlanServices } from '../Plan.service';
import { map } from 'rxjs/operators';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  planRef: any;
  public editForm: UntypedFormGroup;

  constructor(
    private planService: PlanServices,
    private afs: AngularFirestore,
    private formBuilder: UntypedFormBuilder,
  ) {
    this.editForm = this.formBuilder.group({
      A1: [''],
      A2: [''],
      A4: [''],
      A3: [''],
      A5: [''],
      A6: [''],
      A7: [''],
      M1: [''],
      M2: [''],
      M3: [''],
      M4: [''],
      M5: [''],
      M6: [''],
      M7: [''],
    });
  }

  ngOnInit(): void {
   const id = 'mvBOWbDl7stq0j5V9yim';

   this.planService.getPlanDoc(id).subscribe(res => {
    this.planRef = res;
    this.editForm = this.formBuilder.group({
      A1: [this.planRef.A1],
      A2: [this.planRef.A2],
      A3: [this.planRef.A3],
      A4: [this.planRef.A4],
      A5: [this.planRef.A5],
      A6: [this.planRef.A6],
      A7: [this.planRef.A7],
      M1: [this.planRef.M1],
      M2: [this.planRef.M2],
      M3: [this.planRef.M3],
      M4: [this.planRef.M4],
      M5: [this.planRef.M5],
      M6: [this.planRef.M6],
      M7: [this.planRef.M7],
    })
   })
  }

  onSubmit(){
    const id = 'mvBOWbDl7stq0j5V9yim';
    this.planService.updatePlpan(this.editForm.value, id)
  }

}
