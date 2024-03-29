import {
    Component,
    EventEmitter,
    NgModule,
    Output
  } from '@angular/core';
  import {
    FormGroup,
    Validators,
    FormBuilder,
    ReactiveFormsModule
  } from "@angular/forms";
  
  @Component({
    selector: 'app-login',
    template: `
      <form (ngSubmit)="login()"
          [formGroup]="form">
        <label>Email</label>
        <input type="email"
              formControlName="email">
        <label>Password</label>
        <input type="password"
              formControlName="password">
        <button type="submit">Login</button>
      </form>
    `
  })
  export class LoginComponent {
    @Output() loggedIn = new EventEmitter<User>();
    form: FormGroup;
  
    constructor(private fb: FormBuilder) {
    }
  
    ngOnInit() {
      this.form = this.fb.group({
        email: ['', [
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")]],
        password: ['', [
          Validators.required,
          Validators.minLength(8)]],
      });
    }
  
    login() {
      if (this.form.valid) {
        this.loggedIn.emit(
          new User(
            this.form.value.email,
            this.form.value.password
          )
        );
      }
    }
  }

  @NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      ReactiveFormsModule,
    ]
  })
  export class LoginModule { }
  
  export class User {
    constructor(
      public email: string,
      public password: string) {
    }
  }