import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private AuthServ:AuthService,private router:Router ) { }

  ngOnInit(): void {
  }
logout():void{
  this.AuthServ.doLogout().finally(
    ()=>{this.router.navigate(['/login'])}
  )
}
}
