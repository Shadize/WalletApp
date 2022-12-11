import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {ApiResponse} from "@shared/model";
// import {Skill} from '@shared/model/'

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})

@Injectable()
export class TestsComponent implements OnInit{

  public errorHandler(error: { error: { message: any; }; status: any; message: any; }): Observable<ApiResponse> {
    if (error.error instanceof ErrorEvent) {
      return throwError(error.error.message);
    } else {
      return throwError(`Error Code: ${error.status}\nMessage: ${error.message}`);
    }
  }

  ngOnInit(): void {
    // let res = this.createSkill("helo", "hello").pipe(
    //   catchError((error: { error: { message: any; }; status: any; message: any; }) => {
    //     return this.errorHandler(error);
    //   }),)
    //
    // console.log("Creating skill");
    // console.log(res);
  }

  constructor(private http: HttpClient) {}

  api: string = "localhost:2022/api/skill/create"

  skillObject = {
    title: "Hello",
    description: "Test"
  }

  // createSkill = (title: string, description: string) => {
  //   return this.http.get<Skill>(this.api, this.skillObject);
  // }
}
