import { Component, OnInit } from '@angular/core';
import { Member } from 'src/models/member';
import { MemberService } from 'src/services/member.service';
import { GLOBAL } from '../app-config';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
dataSource:Member[];
  constructor(private MS:MemberService) { 
    this.dataSource=this.MS.tab;
  }

  ngOnInit(): void {
  }
//dataSource:Member[]=GLOBAL.db.members;
displayedColumns: string[] = ['id', 'cin', 'name', 'type','cv','createDate','action'];
}
