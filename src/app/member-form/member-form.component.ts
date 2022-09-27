import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
form:any;
  constructor(private MS:MemberService, private router:Router) { } //injection du service memberservice dans ce composant 

  ngOnInit(): void {
    this.initForm();
  }
  initForm():void //initialisation du formulaire
  {
this.form=new FormGroup ({
  cin:new FormControl(null,[Validators.required]),
  name:new FormControl(null,[Validators.required]),
  cv:new FormControl(null,[]),
  type:new FormControl(null,[])

});

  }
  ONSUB():void {
//recuperation de l'element
console.log(this.form.value); //console de inspecter la page
const member=this.form.value;
//invocation de la méthode du service qui envoie http en mode post
this.MS.saveMember(member).then(()=>{this.router.navigate(['.\members'])}) //element recuperer et => l'action
  }


}
