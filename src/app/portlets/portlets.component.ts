import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Column } from '../column';
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;
declare var $;

@Component({
  selector: 'app-portlets',
  templateUrl: './portlets.component.html',
  styleUrls: ['./portlets.component.css']
})
export class PortletsComponent implements OnInit, AfterViewInit {
  
  @Input() data: Observable<Array<Column>>;

  constructor() {
    console.log("PortletsComponent.data:" + this.data);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loadJQuery();
    }, 100);
  }

  loadJQuery() {
    $( ".column" ).sortable({
      connectWith: ".column",
      handle: ".portlet-header",
      cancel: ".portlet-toggle",
      placeholder: "portlet-placeholder ui-corner-all"
    });
 
    $( ".portlet" )
      .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
        
    $( ".portlet-toggle" ).on( "click", function() {
      var icon = $( this );
      icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
      icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
    });
  }

}
