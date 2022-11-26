import { Component, OnInit } from '@angular/core';
import { RecepieService } from '../recepie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-recepie',
  templateUrl: './edit-recepie.component.html',
  styleUrls: ['./edit-recepie.component.scss']
})
export class EditRecepieComponent implements OnInit {
  public editForm: UntypedFormGroup;
  recepieRef: any;

  constructor(
    public recepieService: RecepieService,
    public formBuilder: UntypedFormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      categorie: [''],
      diet: [''],
      difficulty: [''],
      ingredients: [''],
      nutrition: [''],
      preparation: [''],
      recepietitle: [''],
      time: [''],
    });
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.recepieService.getRecepieDoc(id).subscribe(res => {
      this.recepieRef = res;
      this.editForm = this.formBuilder.group({
        categorie: [this.recepieRef.categorie],
        diet: [this.recepieRef.diet],
        difficulty: [this.recepieRef.difficulty],
        ingredients: [this.recepieRef.ingredients],
        nutrition: [this.recepieRef.nutrition],
        preparation: [this.recepieRef.preparation],
        recepietitle: [this.recepieRef.recepietitple],
        time: [this.recepieRef.recepietitple],
      });
    });
  }

  onSubmit() {
    const id = this.act.snapshot.paramMap.get('id');

    this.recepieService.updateRecepie(this.editForm.value, id);
    this.router.navigate(['/rezept']);
  }

}
