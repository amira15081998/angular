import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthService, private router:Router, private ngZone:NgZone) { }

  ngOnInit(): void {
  }
Google():void{
  this.authservice.doGoogleLogin().then(
    ()=>this.successRedirect()).catch(error=>console.log("error"));
}
successRedirect():void{
  this.ngZone.run(()=>
  this.router.navigate(['/members']))
}
}
