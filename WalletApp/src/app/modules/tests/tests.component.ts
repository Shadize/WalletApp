import {Component, Injectable, OnInit} from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {ApiResponse} from "@shared/model";
import {HttpService} from "@shared/service";

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
    let $res = this.listSkills(this.api)

    $res.subscribe(data => {
      console.log(data);

    })

    console.log("Listing skill");
    console.log($res);
  }

  constructor(private http: HttpService) {}

  api: string = "http://localhost:2022/api/skill/list"

  skillObject = {
    title: "Hello",
    description: "Test"
  }

  listSkills = (url: string) : Observable<ApiResponse> => {
    return this.http.get(url + "");
  }




}
