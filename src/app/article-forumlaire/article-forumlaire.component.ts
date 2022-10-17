import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/models/articles';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-article-forumlaire',
  templateUrl: './article-forumlaire.component.html',
  styleUrls: ['./article-forumlaire.component.css']
})
export class ArticleForumlaireComponent implements OnInit {
  form:any;
  currentID: String="";
  item1:any;
  tab:any;
  constructor(private AS:ArticleService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
            //this.initForm();
    //1. recuperation de l'id à partir de url
    this.currentID=this.activatedRoute.snapshot.params.id;
    console.log(this.currentID);
    //2.tester sur la valeur de id
    if (!!this.currentID) //!!truly
    //3. si id a une valeur=> appler la fonction du service getMemeberById(id)=>membre
    this.AS.getArticleById(this.currentID).then((item)=> {this.item1=item; this.initForm1(this.item1)});
    //4. extraction
    //sinon, this.initForm();
    else
    this.initForm();
  }
  initForm1(A:Article):void{
    this.form=new FormGroup ({
      title:new FormControl(A.title,[Validators.required]),
      type:new FormControl(A.type,[Validators.required]),
      lien:new FormControl(A.lien,[]),
      auteur:new FormControl(A.auteur,[]),
      sourcePDF:new FormControl(A.sourcePDF,[])
    
    });
  }
  initForm():void //initialisation du formulaire
  {
this.form=new FormGroup ({
  title:new FormControl(null,[Validators.required]),
  type:new FormControl(null,[Validators.required]),
  lien:new FormControl(null,[]),
  auteur:new FormControl(null,[]),
  sourcePDF:new FormControl(null,[])

});

  }
  ONSUBMIT():void {
    //recuperation de l'element
    console.log(this.form.value); //console de inspecter la page
    const article= {...this.item1, ...this.form.value};
    //invocation de la méthode du service qui envoie http en mode post
    this.AS.saveArticle(article).then(()=>{this.router.navigate(['\articles'])}); //element recuperer et => l'action
  }

}
