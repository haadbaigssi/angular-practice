import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  keyword="";
  send(keyword:string):void{
    this.keyword = keyword;
  }
}
