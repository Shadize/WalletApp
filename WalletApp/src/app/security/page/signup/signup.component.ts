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
  error: boolean = false;   // Indicateur d'erreur lors de la soumission du formulaire
  hide: boolean = true;     // Indicateur de masquage pour le champ du mot de passe
  success: boolean = false; // Indicateur de succs pour la soumission du formulaire

  constructor(public auth: AuthService) { }

  ngOnInit(): void {

    this.formgroup = new FormGroup({
      username: new FormControl('', Validators.required),

      // Pattern qui oblige l'utilisateur à rentrer un MDP de 8 caractères
      // Avec une lettre minuscule, une lettre majuscule,
      // un chiffre et un caractère spécial au minimum

      password: new FormControl('', [Validators.required, Validators.pattern(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\x40\x23\x24\x25\x5E\x2A\x3F\x26]).{8,}$"
      )])
    });
  }

  signup(username: string, password: string) {
    // Construction du payload pour l'inscription
    const payload: SignupPayload = {
      username: username,
      password: password
    };

    // Tentative d'inscription

    this.auth.signup(payload).subscribe(data =>{
      // Si succes, on désactive le formulaire et affiche les messages de succès

      if (data.result) {
        this.success = true;
        this.error = false;
        this.formgroup.disable();

        // Sinon on affiche les messages d'erreurs
      } else {
        this.error = true;
      }

    });
  }

}
