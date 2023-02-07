import {Component, Input, OnInit} from '@angular/core';
import {forEach, isNil} from "lodash";
import {count} from "rxjs";

@Component({
  selector: 'app-column-selector',
  templateUrl: './column-selector.component.html',
  styleUrls: ['./column-selector.component.scss']
})
export class ColumnSelectorComponent{

  // Implementation de ColumnSelector pour pouvoir ajouter ou enlever une colonne dans un tableau
  // Permet de faciliter les recherches

  @Input() referenceColumns!: string[];
  @Input() displayedColumns!: string[];

  // Cette fonction permet d'afficher à la bonne place dans le tableau. Les colonnes ne peuvent pas être
  // interverties et auront toujours le meme ordre
  columnManage(column: string)
  {
    let index = this.displayedColumns.indexOf(column);

    if(!isNil(index) && index >= 0)
    {
      this.displayedColumns.splice(index,1);
    }
    else
    {
      let indexRef = this.referenceColumns.indexOf(column);
      let i = 0;
      let indexVal = 0;

      this.referenceColumns.forEach(e => {
        if(indexVal < indexRef)
          if(this.displayedColumns[i] === e)
            i++;
        indexVal++;
      })
      // ajoute la colonne au bon index sans changer la reference du tableau dans la memoire
      this.displayedColumns.splice(i, 0, column)
    }
  }
}
