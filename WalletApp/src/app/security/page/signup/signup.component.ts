import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SigninPayload, SignupPayload} from "@security/model";
import {AuthService} from "@security/service/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formgroup!: FormGroup;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.formgroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.pattern(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$"
      )])
    });

  }

  signup(username: string, password: string) {

    const payload: SignupPayload = {
      username: username,
      password: password
    };

    this.auth.signup();
  }
}
