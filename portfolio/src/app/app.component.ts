import { Component } from '@angular/core';

declare const myFun: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';


  callFun(){
    myFun();
  }
}

