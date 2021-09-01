import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
<form>
  <label>Email</label>
  <input type="email"
         #email>
  <label>Password</label>
  <input type="password"
         #password>
  <button type="button"
          (click)="login(email.value, password.value)"
          [disabled]="!enabled">Login
  </button>
</form>
`
})
export class LoginComponent {
  @Output() loggedIn = new EventEmitter<User>();
  @Input() enabled = true;

  login(email, password) {
    if (email && password) {
      // emits values as new user
      this.loggedIn.emit({ email: email, password: password });
    }
  }
}

export interface User {
  email: string;
  password: string;
}
