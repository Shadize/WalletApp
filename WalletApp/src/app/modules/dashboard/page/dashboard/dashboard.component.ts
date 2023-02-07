  import {Component, OnInit} from '@angular/core';
import {AuthService} from '@security/service/auth.service';
import {ApiResponse} from '@shared/model';
import {Credential, CredentialDto} from '@security/model';
import {CredentialHelper} from '@security/helper';
  import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  credential?: Credential;
  selectedLanguage: string = "EN";

  constructor(public auth: AuthService, private translate: TranslateService) {
  }

  ngOnInit(): void {

  }

  me(): void {
    this.auth.me().subscribe((response: ApiResponse) => {
      this.credential = CredentialHelper.credentialFromDto(response.data as CredentialDto);

    })
  }

  logout(): void {
    this.auth.logout();
  }

  handleLanguageChange(language: string): void {
    this.selectedLanguage = language.toUpperCase()
    this.translate.use(language);
  }
}
