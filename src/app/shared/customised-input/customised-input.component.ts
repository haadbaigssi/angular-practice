import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-customised-input',
  templateUrl: './customised-input.component.html',
  styleUrls: ['./customised-input.component.sass']
})
export class CustomisedInputComponent implements OnInit {
  @Input() label = "";
  @Input() id = "";
  @Input() type = "";
  @Input() formm = new FormControl();
  @Output() input:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emit(keyword:string):void{
    this.input.emit(keyword);
  }

}
