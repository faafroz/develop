import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {MatFormField} from '@angular/material/form-field';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatCard} from '@angular/material/card';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    FormsModule,
    MatFormField,
    MatProgressSpinner,
    MatCard,
    MatInput,
    MatButton,
    NgIf
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading:boolean=false;

  constructor(private authService: AuthService) {
  }

  onLogin(form:NgForm){
    if(form.invalid){
      return;
    }

    this.authService.login(form.value.email, form.value.password);

  }
}
