import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from 'src/models/member';
import { MemberService } from 'src/services/member.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
dataSource:MatTableDataSource<Member>;
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
  constructor(private MS:MemberService, private dialog:MatDialog) { 
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
  //ouvrir la boite de dialogue
  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  });
  //attendre le resultat thread observable
  dialogRef.afterClosed().subscribe(result => {
    if (result)
  //if resultat=confirm alors :
  this.MS.deleteMember(id).then(() => this.dataSource = new MatTableDataSource(this.MS.tab));
  })



}
}

