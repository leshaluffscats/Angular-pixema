import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

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
  
  // signInForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // })
  
  constructor(private formBuilder: FormBuilder){}


}
