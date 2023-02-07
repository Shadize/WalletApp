import {Component, OnInit} from '@angular/core';
import {AuthService} from '@security/service/auth.service';
import {SigninPayload} from '@security/model';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  formGroup!: FormGroup;
  hide: boolean = true;   // Indicateur de masquage pour le champ du mot de passe
  error: boolean = false; // Indicateur d'erreur lors de la soumission du formulaire
  success: boolean = false;
  private selectedLanguage: string ="EN";

  constructor(public auth: AuthService, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({

      // LIGNE A DECOMMENTER
      // username: new FormControl('', Validators.required),
      // password: new FormControl('', Validators.required)

      // LIGNE A SUPRIMER
      username: new FormControl('captain', Validators.required),
      password: new FormControl('P@ssword', Validators.required)
    })
  }

  signin(username: string, password: string) {
    // Construction du payload à envoyer pour le login
    const payload: SigninPayload = {
      username: username,
      password: password
    };

    // Tentative de login

    this.auth.signin(payload).subscribe(data =>{
      // Si succes, on désactive le formulaire et affiche les messages de succes
      if (data.result) {
        this.success = true;
        this.error = false;
        this.formGroup.disable();


        // Sinon on affiche les messages d'erreurs

      } else {
        this.error = true;

      }
    })
  }

  handleLanguageChange(language: string): void {
    this.selectedLanguage = language.toUpperCase()
    this.translate.use(language);
  }
}
