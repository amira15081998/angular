import { Component, OnInit } from '@angular/core';
import { Member } from 'src/models/member';
import { GLOBAL } from '../app-config';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
dataSource:Member[]=GLOBAL.db.members;
displayedColumns: string[] = ['id', 'cin', 'name', 'type','cv','createDate','action'];
}
