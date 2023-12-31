import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { ColumnSelectorComponent } from './component/column-selector/column-selector.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ColumnSelectorComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatTooltipModule,
        MatIconModule,
        MatPaginatorModule,
        TranslateModule
    ],
  providers: [],
  exports: [
    ColumnSelectorComponent
  ]
})
export class SharedModule {
}
