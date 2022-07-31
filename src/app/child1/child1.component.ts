import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.sass']
})
export class Child1Component {
  name = new FormControl('');
  constructor() { }
  
  @Output() emitter:EventEmitter<string> = new EventEmitter<string>();
  
  emit(keyword: string){
    this.emitter.emit(keyword);
  }
}
