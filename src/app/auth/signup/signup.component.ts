import {Component} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {MatFormField} from '@angular/material/form-field';
import {MatCard} from '@angular/material/card';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  imports: [
    MatFormField,
    MatCard,
    MatProgressSpinner,
    FormsModule,
    MatInput,
    MatButton,
    NgIf
  ],
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  isLoading: boolean = false;

  constructor(private authService: AuthService) {
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.createUser(form.value.email, form.value.password);
  }


}
