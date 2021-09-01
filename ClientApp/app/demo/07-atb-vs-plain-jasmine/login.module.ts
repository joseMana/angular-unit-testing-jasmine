import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthService } from '../06-classes-and-pipes/auth.service';

import { LoginComponent } from './login.component';

@NgModule({  
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
