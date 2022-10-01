import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/models/member';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
form:any;
currentID: String="";
item1:any;
  constructor(private MS:MemberService, private router:Router, private activatedRoute:ActivatedRoute) { } //injection du service memberservice dans ce composant 

  ngOnInit(): void {
    //this.initForm();
    //1. recuperation de l'id à partir de url
    this.currentID=this.activatedRoute.snapshot.params.id;
    console.log(this.currentID);
    //2.tester sur la valeur de id
    if (!!this.currentID) //!!truly
    //3. si id a une valeur=> appler la fonction du service getMemeberById(id)=>membre
    this.MS.getMemberById(this.currentID).then((item)=> {this.item1=item; this.initForm1(this.item1)});
    //4. extraction
    //sinon, this.initForm();
    else
    this.initForm();

  }
  initForm1(M:Member):void{
    this.form=new FormGroup ({
      cin:new FormControl(M.cin,[Validators.required]),
      name:new FormControl(M.name,[Validators.required]),
      cv:new FormControl(M.cv,[]),
      type:new FormControl(M.type,[])
    
    });
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
const member= {...this.item1, ...this.form.value};
//invocation de la méthode du service qui envoie http en mode post
this.MS.saveMember(member).then(()=>{this.router.navigate(['.\members'])}) //element recuperer et => l'action
  }


}
