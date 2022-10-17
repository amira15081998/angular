import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Article } from 'src/models/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  tab:Article[]=GLOBAL.db.articles;
  constructor() { }

  deleteArticle(id:string):Promise<void>{
    //return this.httpClient.delete<void>('link').toPromise();
this.tab=[...this.tab.filter(item=>item.id!=id)];
return new Promise(resolve=>resolve());
  }

  saveArticle(article:any):Promise<any>
  {
//return this.httpClient.post<Member>('localhost:4200',member).toPromise();
const articleToSave={...article,
  id:article.id ??(Math.ceil(Math.random()*10000)).toString(),
  date: article.date ?? new Date().toDateString(),
}
this.tab=[articleToSave, ...this.tab.filter(item=>item.id!=articleToSave.id)];
return new Promise(resolve=>resolve(articleToSave));
  }

  getArticleById(id:String):Promise<Article>
  {
    //return this.httpClient.get<Member>('link').toPromise();
    return new Promise(resolve=>resolve(
      this.tab.filter(item => item.id===id)[0]??null
    ));
    
  }
  getAllArticles():Promise<Article[]>{
    //return this.httpClient.get<Member[]>("link").toPromise();
    return new Promise (resolve=>resolve(this.tab));
      }

    Affect(val:string, currentID:any):Promise<void>{
this.getArticleById(currentID).then ((item)=>{item.auteur=val});
return new Promise (resolve=>resolve());
    }
}
