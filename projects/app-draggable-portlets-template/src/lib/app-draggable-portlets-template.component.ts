import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draggable-portlets-template',
  template: `
    <app-load-portlets configFile="/assets/json/data.json"></app-load-portlets>
  `,
  styles: []
})
export class AppDraggablePortletsTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
