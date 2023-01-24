import { Component } from '@angular/core';
@Component({
  selector: 'app-fleet-insert',
  templateUrl: './fleet-insert.component.html',
  styleUrls: ['./fleet-insert.component.scss']
})
export class FleetInsertComponent {
  insert(title: string, description: string, type: string, cost: string)
  {
    // let payload: FleetCreatePayloadInterface = {title, description, type, cost: parseFloat(cost)};
    // this.subList.push(
    //   this.fleetService.create(payload).subscribe(data => {
    //     if(data.result)
    //     {
    //       // Afficher un truc "Success"
    //     }
    //     this.refreshList();
    //   })
    // );

  };
}
