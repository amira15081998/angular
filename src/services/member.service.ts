import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  id:(Math.ceil(Math.random()*10000)).toString(),
  createDate: new Date().toISOString(),
}
this.tab=[memberToSave, ...this.tab.filter(item=>item.id!=memberToSave.id)];
return new Promise(resolve=>resolve(memberToSave));


  }

}
