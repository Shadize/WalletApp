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
  hide: boolean = true;
  error: boolean = false;

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  signin(username: string, password: string) {
    const payload: SigninPayload = {
      /*
      username: 'captain',
      password: 'P@ssword'

       */
      username: username,
      password: password
    };
    this.auth.signin(payload).subscribe(data =>{
      if (!data.result) {
        this.error = true;
      } else {
        this.error = false;
      }
      this.auth.signup()
    })
  }
}
