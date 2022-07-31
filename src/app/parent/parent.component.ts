import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent implements OnInit {
  title="";
  constructor() { }

  ngOnInit(): void {
  }

  updatetitle(title:string ){
    this.title= title;
  }

}
