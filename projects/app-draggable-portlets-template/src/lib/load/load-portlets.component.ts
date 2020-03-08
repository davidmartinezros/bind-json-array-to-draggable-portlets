import { Component, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnJsonArrayService } from '../return-json-array.service';
//import { environment } from 'src/environments/environment';
import { Data } from '../data';

//declare var $ :any;

//declare var jQuery: any;

//import * as $ from 'jquery';

'use strict';

//import * as $ from 'jquery';

import * as jqueryProxy from 'jquery'
const jquery: JQueryStatic = (<any>jqueryProxy).default || jqueryProxy

require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
require('jquery-ui/ui/disable-selection');

@Component({
  selector: 'app-load-portlets',
  templateUrl: './load-portlets.component.html',
  styleUrls: ['./load-portlets.component.css'],
  providers: [ReturnJsonArrayService],
  encapsulation: ViewEncapsulation.None
})
export class LoadPortletsComponent {

  data: Observable<Data>;

  @Input() configFile: String;

  constructor(private service: ReturnJsonArrayService) {
    
  }

  ngOnInit() {
    console.log(this.configFile);
    if(this.configFile) {
      this.loadFile(this.configFile);
      setTimeout(() => {
        this.loadJQuery();
      }, 300);
    }
  }

  loadJQuery() {
    this.data.subscribe(val => {
      let columnsCount = val.columnsCount;
      if(columnsCount <= 0) {
        columnsCount = 1;
      }
      let width = ((1/columnsCount)*100);
      jquery( ".column" ).width(width + "%");
    });
    (<any>jquery( ".column" )).sortable({
      connectWith: ".column",
      handle: ".portlet-header",
      cancel: ".portlet-toggle",
      placeholder: "portlet-placeholder ui-corner-all"
    });
 
    jquery( ".portlet" )
      .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
        
        jquery( ".portlet-toggle" ).on( "click", function() {
      var icon = jquery( this );
      icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
      icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
    });
  }

  loadFile(configFile) {
    this.data = this.service.getScreen('..' /*+ environment.directory*/ + configFile);
    this.data.subscribe(val => console.log(val));
  }
  
}
