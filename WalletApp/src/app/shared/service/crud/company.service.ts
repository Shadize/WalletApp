import {Observable} from "rxjs";
import {Skill} from "@shared/model/entity/skill.interface";
import {Injectable} from "@angular/core";
import {HttpService} from "@shared/service";

@Injectable()
export class CompanyService {

  constructor(private http: HttpService) {
  }
  list = (url: string) : Observable<Skill> => {
    return this.http.get(url + "");
  }
}
