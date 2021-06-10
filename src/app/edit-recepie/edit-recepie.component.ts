import { Component, OnInit } from '@angular/core';
import { RecepieService } from '../recepie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-recepie',
  templateUrl: './edit-recepie.component.html',
  styleUrls: ['./edit-recepie.component.scss']
})

export class EditRecepieComponent implements OnInit {

  public editForm: FormGroup;
  recepieRef: any;

  constructor(
    public recepieService: RecepieService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      recepietitle: [''],
      categorie: [''],
      ingredients: ['']
    });
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.recepieService.getRecepieDoc(id).subscribe(res => {
      this.recepieRef = res;
      this.editForm = this.formBuilder.group({
        name: [this.recepieRef.name],
        email: [this.recepieRef.email],
        contact: [this.recepieRef.contact]
      });
    });
  }

  onSubmit(): void {
    const id = this.act.snapshot.paramMap.get('id');

    this.recepieService.updateRecepie(this.editForm.value, id);
    this.router.navigate(['/rezept']);
  }

}
