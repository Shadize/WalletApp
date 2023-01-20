import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { ColumnSelectorComponent } from './component/column-selector/column-selector.component';

@NgModule({
  declarations: [
    ColumnSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: []
})
export class SharedModule {
}
