import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {AuthService} from '../services/authservice';
import {User} from '../models/User';


@Component({
  selector: 'app-auth',
  imports: [
    ReactiveFormsModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
    RouterLink
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {
  selectedTab = 0;
  loginForm: FormGroup = new FormGroup({
    // username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  signupForm: FormGroup =  new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private fb: FormBuilder, private route:ActivatedRoute, private authService:AuthService) {

    // this.loginForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', Validators.required]
    // });
    //
    // this.signupForm = this.fb.group({
    //   name: ['', [Validators.required, Validators.minLength(3)]],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // });
    this.selectedTab = Number(this.route.snapshot.paramMap.get('path'));
  }

  onLogin() {
    console.log(this.loginForm.value);
    const user:User = this.loginForm.value as User;
    this.authService.login(user).subscribe((response) => {
      console.log('Token', response.token);
      localStorage.setItem('token', String(response.token));
      // You can navigate to a different page or perform other actions here
    })
    // if (this.loginForm.valid) {
    //   this.authService.login(this.loginForm.value).subscribe(res => {
    //     console.log('Login success', res);
    //   });
    // }
  }

  onSignup() {
    console.log(this.signupForm.value);
    const user:User = this.signupForm.value as User;
    this.authService.register(user).subscribe((response) => {
      console.log('User signed up successfully', response);
      // You can navigate to a different page or perform other actions here
    });
    // if (this.signupForm.valid) {
    //   this.authService.signup(this.signupForm.value).subscribe(res => {
    //     console.log('Signup success', res);
    //   });
    }

  enableSignUp() {
    this.selectedTab = 1;
  }

  enableLogin() {
    this.selectedTab = 0;

  }
}
