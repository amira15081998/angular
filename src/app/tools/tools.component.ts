import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Outils } from 'src/models/outil';
import { OutilsService } from 'src/services/outils.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  dataSource:MatTableDataSource<Outils>;
  constructor(private TS:OutilsService, private dialog:MatDialog) {
    this.dataSource = new MatTableDataSource(this.TS.tab);
   }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['name','id', 'date', 'source', 'action'];

}
