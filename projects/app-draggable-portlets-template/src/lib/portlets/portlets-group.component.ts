import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../data';

@Component({
  selector: 'app-portlets-group',
  templateUrl: './portlets-group.component.html',
  styleUrls: ['./portlets-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortletsGroupComponent {
  
  @Input() data: Observable<Data>;

  constructor() {
  }

}
