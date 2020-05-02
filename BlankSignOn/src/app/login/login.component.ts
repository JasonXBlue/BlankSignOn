import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginValid = true;
  inputPassword: FormControl;

  get passwordValid(): boolean {
    return !this.inputPassword.valid && this.inputPassword.touched;
  }
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.inputPassword = this.formBuilder.control(
      '',
      Validators.compose([Validators.required, Validators.maxLength(30)])
    );
    this.loginForm = this.formBuilder.group({
      inputEmail: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.maxLength(100),
        ]),
      ],
      inputPassword: this.inputPassword,
    });
  }

  ngOnInit(): void {}

  submit() {
    this.loginValid = this.authService.login(
      this.loginForm.controls.inputEmail.value,
      this.loginForm.controls.inputPassword.value
    );

    if (this.loginValid) {
      this.router.navigate(['/userprofile']);
    }
  }
}
