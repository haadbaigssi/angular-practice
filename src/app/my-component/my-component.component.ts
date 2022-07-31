import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.sass']
})
export class MyComponentComponent implements OnInit {
  count = 1;
  constructor() { }

  ngOnInit(): void {
    console.log("OnInit");
  }

  public incr(){
    this.count = this.count+1;
    // console.log(this.count);
  }

  public add10(){
    this.count = this.count+10;
    // console.log(this.count);
  }

}
