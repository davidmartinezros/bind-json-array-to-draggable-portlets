import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Portlet } from '../portlet';

@Component({
  selector: 'app-portlet',
  templateUrl: './portlet.component.html',
  styleUrls: ['./portlet.component.css']
})
export class PortletComponent {

  @Input() portlet: Observable<Portlet>;

  constructor() {
  }

}
