import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../data';

@Component({
  selector: 'app-portlets',
  templateUrl: './portlets.component.html',
  styleUrls: ['./portlets.component.css']
})
export class PortletsComponent {
  
  @Input() data: Observable<Data>;

  constructor() {
  }

}
