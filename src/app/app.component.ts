import { Component } from '@angular/core';
@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent{
  
  title = 'inside_sales_app';

  constructor(){

    console.log("Constructor Executed");

}

}
