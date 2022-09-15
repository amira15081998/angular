import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LAB';
  name="Amira";
  Agenda=[
    {Date: "17/12", Message: "BA"},
    {Date: "18/12", Message: "BB"},
  ];
}
