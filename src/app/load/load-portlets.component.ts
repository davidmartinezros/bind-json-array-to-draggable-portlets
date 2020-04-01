import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnJsonArrayService } from '../return-json-array.service';
import { Data } from '../data';

/*opcio antiga */

//'use strict';

//import * as jqueryProxy from 'jquery'
//const jquery: JQueryStatic = (<any>jqueryProxy).default || jqueryProxy

/*opcio antiga */

//'use strict';

//import * as jqueryProxy from 'jquery'
//const jquery: JQueryStatic = (<any>jqueryProxy).default || jqueryProxy

/* opcio nova */

//'use strict';

import * as jQuery_ from 'jquery';

const jQuery = jQuery_;

require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
//require('jquery-ui/ui/disable-selection');

/* opcio mes nova */

//declare var jQuery: any;

@Component({
  selector: 'app-load-portlets',
  templateUrl: './load-portlets.component.html',
  styleUrls: ['./load-portlets.component.scss'],
  providers: [ReturnJsonArrayService],
  encapsulation: ViewEncapsulation.None
})
export class LoadPortletsComponent {

  data: Observable<Data>;

  @Input() configFile: String;

  //@Output() notify: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: ReturnJsonArrayService) {
    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js');
    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js');
    this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-sortable/0.9.13/jquery-sortable-min.js');
    //this.loadScript('node_modules/app-draggable-portlets-template/assets/js/disable-selection.js');
  }

  loadScript(url) {
    console.log("preparing to load...");
    let node = document.createElement('script');
    node.src = url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.head.appendChild(node);
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
      jQuery( ".column" ).width(width + "%");
    }); 
    jQuery( ".portlet" )
      .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
        
    jQuery( ".portlet-toggle" ).on( "click", function() {
      var icon = jQuery( this );
      icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
      icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
    });
    (<any>jQuery( ".column" )).sortable({
      connectWith: ".column",
      handle: ".portlet-header",
      cancel: ".portlet-toggle",
      placeholder: "portlet-placeholder ui-corner-all"
    });
    
  }

  loadFile(configFile) {
    this.data = this.service.getScreen(configFile);
    this.data.subscribe(val => console.log(val));
  }
/*
  onChange(event) {
    console.log('event:' + event);
    var file: File = event.srcElement.files[0];
    var url;
    console.log('file:' + file);
    console.log('file.name:' + file.name);
    console.log('file.type:' + file.type);
    if(file != null) {
      url = URL.createObjectURL(file);
    } else {
      url = '.' + environment.directory + '/assets/json/data.json';
    }
    console.log('url:' + url);
    if(url != null) {
      this.data = this.service.getScreen(url);
    }
    console.log('enviem');
    this.notify.emit(this.data);
    console.log('fi onChange');
    setTimeout(() => {
      this.loadJQuery();
    }, 300);
  }
*/
}
