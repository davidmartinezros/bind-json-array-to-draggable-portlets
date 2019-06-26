import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnJsonArrayService } from '../return-json-array.service';
import { environment } from 'src/environments/environment';
import { Column } from '../column';
import { Data } from '../data';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css'],
  providers: [ReturnJsonArrayService]
})
export class LoadComponent implements OnInit {

  data: Observable<Data>;

  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  constructor(private service: ReturnJsonArrayService) {
    this.loadFile();
  }

  ngOnInit() {

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
  }

}
