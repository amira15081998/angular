import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { resolve } from 'dns';
import { GLOBAL } from 'src/app/app-config';
import { Member } from 'src/models/member';

@Injectable({
  providedIn: 'root' //tout le root peut etre injecter
})
export class MemberService {
tab:Member[]=GLOBAL.db.members;
  constructor(private httpClient:HttpClient){
  }
  saveMember(member:any):Promise<any>
  {
//return this.httpClient.post<Member>('localhost:4200',member).toPromise();
const memberToSave={...member,
  id:member.id ??(Math.ceil(Math.random()*10000)).toString(),
  createDate: member.createDate ?? new Date().toDateString(),
}
this.tab=[memberToSave, ...this.tab.filter(item=>item.id!=memberToSave.id)];
return new Promise(resolve=>resolve(memberToSave));
  }
  getMemberById(id:String):Promise<Member>
  {
    //return this.httpClient.get<Member>('link').toPromise();
    return new Promise(resolve=>resolve(
      this.tab.filter(item => item.id===id)[0]??null
    ));
    
  }
  deleteMember(id:string):Promise<void>{
    //return this.httpClient.delete<void>('link').toPromise();
this.tab=[...this.tab.filter(item=>item.id!=id)];
return new Promise(resolve=>resolve());
  }
  getAllMembers():Promise<Member[]>{
//return this.httpClient.get<Member[]>("link").toPromise();
return new Promise (resolve=>resolve(this.tab));
  }

}
