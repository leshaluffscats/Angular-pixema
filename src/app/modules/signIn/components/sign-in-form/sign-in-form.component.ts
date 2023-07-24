import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})


export class SignInFormComponent {

  signInForm = this.formBuilder.group({
    email: ["", Validators.required],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });

  // ? как правильно типизировать email и пароль

  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  handleSignIn() {
    this.auth.signIn(this.signInForm.controls.email, this.signInForm.controls.password)
  }
}
