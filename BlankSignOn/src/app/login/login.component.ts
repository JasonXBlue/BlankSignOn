import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  get passwordValid(): boolean {
    return (
      !this.loginForm.controls.inputPassword.valid &&
      this.loginForm.controls.inputPassword.touched
    );
  }
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      inputEmail: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.maxLength(100),
        ]),
      ],
      inputPassword: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(30)]),
      ],
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.loginForm);
  }
}
