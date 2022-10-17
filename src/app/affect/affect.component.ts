import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/models/member';
import { ArticleService } from 'src/services/article.service';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-affect',
  templateUrl: './affect.component.html',
  styleUrls: ['./affect.component.css']
})
export class AffectComponent implements OnInit {
  
  currentID: String="";
  selected = "";
  tab:Member[];
  Control = new FormControl('', Validators.required);

  constructor(private AS:ArticleService, private router:Router, private activatedRoute:ActivatedRoute,private MS:MemberService) { 
    this.tab=this.MS.tab;
  }

  ngOnInit(): void {
  }
  add(val:string):void{
    //1.recuperer id à partir de url
this.currentID=this.activatedRoute.snapshot.params.id;
    //2.si id exist alors, appeler la fonction affect du service
    if (!!this.currentID) 
    this.AS.Affect(val,this.currentID).then(()=>{this.router.navigate(['\articles'])});
  }
}
