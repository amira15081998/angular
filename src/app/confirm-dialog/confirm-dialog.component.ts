import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
public title1="Are you sure?";
public content1="Do you really want to remove this item?";
public cancel="Cancel";
public confirm="Confirm";
constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }
  ngOnInit(): void {
  }

}
