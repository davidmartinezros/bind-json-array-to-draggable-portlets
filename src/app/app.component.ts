import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'bind-json-array-to-draggable-portlets';

  configFile = "/assets/json/data.json";

}
