import { Component } from '@angular/core';
import { ReturnJsonArrayService } from './return-json-array.service';
import { environment } from 'src/environments/environment';
import { Data } from './data';
import { Observable } from 'rxjs';
import { Portlet } from './portlet';
import { Column } from './column';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bind-json-array-to-draggable-portlets';

  data: Observable<Array<Column>>;

  constructor(private service: ReturnJsonArrayService) {
    debugger;
    this.data = this.service.getScreen('..' + environment.directory + '/assets/json/data.json');
    this.data.subscribe(val => console.log(val));
  }
}
