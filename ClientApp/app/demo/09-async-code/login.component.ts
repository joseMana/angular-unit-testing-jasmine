import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth.service";

@Component({
  selector: 'app-login',
  template: `
  <a id="auth">
    <span *ngIf="needsLogin">Login</span>
    <span *ngIf="!needsLogin">Logout</span>
  </a>
`
})
export class LoginComponent implements OnInit {

  needsLogin: boolean = true;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    // this.auth.isAuthenticated().then((authenticated) => {
    //   this.needsLogin = !authenticated;
    // });

    this.auth.isLoggedIn().subscribe((isLoggedIn: boolean) => {
       this.needsLogin = !isLoggedIn;
    });
  }
}