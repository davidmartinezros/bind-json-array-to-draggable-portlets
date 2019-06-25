import { Component, AfterViewInit  } from '@angular/core';
import { ReturnJsonArrayService } from './return-json-array.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Column } from './column';
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;
declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'bind-json-array-to-draggable-portlets';

  data: Observable<Array<Column>>;

  constructor(private service: ReturnJsonArrayService) {
    this.data = this.service.getScreen('..' + environment.directory + '/assets/json/data.json');
    this.data.subscribe(val => console.log(val));
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
