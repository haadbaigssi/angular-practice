import { KeyedWrite } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.sass']
})
export class UserformComponent implements OnInit {
  name:string = "";
  fName = "";
  subject = "";
  email = "";
  birth = 0;
  dob = new FormControl();
  gender = new FormControl();
  emailF = new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  
  constructor() { }

  setName(keyword:string){
    this.name = keyword;
  }

  setFname(keyword:string){
    this.fName = keyword;
  }

  setSubject(keyword:string){
    this.subject = keyword;
  }

  setEmail(keyword:string){
    this.email = keyword;
  }

  calculateAge(){
    const today = new Date();
    const birth = new Date(this.dob.value);
    this.birth = Math.abs(birth.getFullYear() - today.getFullYear());
  }

  ngOnInit(): void {
  }

}
;