import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnJsonArrayService } from '../return-json-array.service';
import { environment } from 'src/environments/environment';
import { Data } from '../data';
import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;
declare var $;

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css'],
  providers: [ReturnJsonArrayService]
})
export class LoadComponent implements AfterViewInit {

  data: Observable<Data>;

  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: ReturnJsonArrayService) {
    this.loadFile();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loadJQuery();
    }, 100);
  }

  loadJQuery() {
    this.data.subscribe(val => {
      let columnsCount = val.columnsCount;
      if(columnsCount <= 0) {
        columnsCount = 1;
      }
      let width = ((1/columnsCount)*100);
      $( ".column" ).width(width + "%");
    });
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

  loadFile() {
    this.data = this.service.getScreen('..' + environment.directory + '/assets/json/data.json');
    this.data.subscribe(val => console.log(val));
  }

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
    }, 100);
  }

}
