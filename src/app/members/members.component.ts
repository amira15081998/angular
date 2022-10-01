import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from 'src/models/member';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
dataSource:MatTableDataSource<Member>;
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
  constructor(private MS:MemberService) { 
    this.dataSource = new MatTableDataSource(this.MS.tab);
  }

  ngOnInit(): void {
  }
//dataSource:Member[]=GLOBAL.db.members;
displayedColumns: string[] = ['id', 'cin', 'name', 'type','cv','createDate','action'];
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
fetchDataSoure():void{
  this.getMembers();
}
getMembers()
{
  this.MS.getAllMembers().then((tableau)=>this.dataSource.data=tableau);
}
OnRemove(id:string):void{
  this.MS.deleteMember(id).then(() => this.dataSource = new MatTableDataSource(this.MS.tab));
}
}

