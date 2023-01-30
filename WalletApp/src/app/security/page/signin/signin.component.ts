import {Component, OnInit} from '@angular/core';
import {AuthService} from '@security/service/auth.service';
import {SigninPayload} from '@security/model';
import {FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  signin() {
    const payload: SigninPayload = {
      username: 'captain',
      password: 'P@ssword'
    };
    this.auth.signin(payload).subscribe()
  }
}
