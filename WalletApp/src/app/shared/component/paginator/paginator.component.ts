import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit{

  @Input() objectList!: any;
  pageSizeOptions = [5,10,25,100,500];

  //displayedList: any = this.objectList.slice(0,9);
  ngOnInit(): void {
    console.log(this.objectList)
  }

  loadObjects(): void
  {

  }

}
