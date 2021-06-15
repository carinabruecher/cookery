import { Component, OnInit } from '@angular/core';
import { User } from '../shared/services/user';
import { UserProfilModel } from '../userProfil-model';
import { userProfilServices } from '../userProfil.service';

@Component({
  selector: 'app-haushalt',
  templateUrl: './haushalt.component.html',
  styleUrls: ['./haushalt.component.scss']
})
export class HaushaltComponent implements OnInit {
  nutzer: UserProfilModel[];
  user: User;

  constructor(private nutzerService: userProfilServices) { }

  ngOnInit(): void {
    this.nutzerService.getUserList().subscribe(res => {
      this.nutzer = res.map( e => {
        console.log(e.payload.doc.data() as object);
        return{
          id: e.payload.doc.id,
          ... (e.payload.doc.data() as object)
        } as UserProfilModel
      })
    })
  }

}
