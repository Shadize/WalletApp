import {Injectable, OnDestroy} from '@angular/core';
import {ApiResponse, CrudServiceInterface, PayloadInterface} from "@shared/model";
import {BehaviorSubject, Observable} from "rxjs";
import {ApiService} from "@shared/service";
import {map} from "rxjs/operators";
import {Fleet} from "@shared/model/dto/fleet.interface";
import {FleetCreatePayloadInterface} from "@shared/model/payload/create/FleetCreatePayload.interface";
import {FleetUpdatePayloadInterface} from "@shared/model/payload/update/FleetUpdatePayload.interface";


@Injectable(
  {providedIn: 'root'}
)
export class FleetService extends ApiService { //implements CrudServiceInterface{

  /*J'ai implementé ce service de tel manière à ce qu'il colle au modèle de Crud qu'on avait à la base
  * Etant donné que j'ai implmenté le module employee et fleet, ce changement ne pouvait impacté que mon travail.
  * Donc ce service n'implémente donc pas le CrudServiceInterface*/

  // Stockage du retour API dans un BehaviorSubject pour la list car la fonction list() retourne un void
  fleetList$$: BehaviorSubject<Fleet[]> = new BehaviorSubject<Fleet[]>([]);

  // Liste tous les fleets dans le fleetList$$
  list(): void{
    this.get(`fleet/list`).subscribe( data => {
      this.fleetList$$.next((data.data) ? data.data as Fleet[] : [] as Fleet[]);
    })
  }

  // Récupère un fleet par son id et retourne un objet ApiResponse
  detail(id: string | number): Observable<ApiResponse> {
    return this.get(`fleet/detail/${id}`);
  }

  // Créer un fleet et retourne un objet ApiResponse
  create(addPayload: FleetCreatePayloadInterface): Observable<ApiResponse>
  {
    return this.post("fleet/create", addPayload);
  }

  // Met à jour un fleet et retourne un objet ApiResponse
  update(updatePayload: PayloadInterface): Observable<ApiResponse>
  {
    return this.put("fleet/update", updatePayload);
  }

  // Supprime un fleet et retourne un objet ApiResponse
  remove(id: string | number): Observable<ApiResponse>
  {
    return this.delete(`fleet/delete/${id}`).pipe(
      map((response: ApiResponse) => {
        return response;
      })
    )
  }
}
