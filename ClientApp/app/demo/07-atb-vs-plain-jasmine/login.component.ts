import {Component} from '@angular/core';
import {AuthService} from "../06-classes-and-pipes/auth.service";

@Component({
  selector: 'app-login',
  template: `
  <a id="auth" class="auth">
    <span *ngIf="needsLogin()">Login</span>
    <span *ngIf="!needsLogin()">Logout</span>
  </a>
  `
})
export class LoginComponent {

  constructor(private auth: AuthService) {
  }

  public needsLogin() {
    return !this.auth.isAuthenticated();
  } 
}