import { __decorate, __metadata } from 'tslib';
import { defineInjectable, Injectable, Component, Input, ViewEncapsulation, inject, NgModule } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';

let AppDraggablePortletsTemplateService = class AppDraggablePortletsTemplateService {
    constructor() {
    }
};
AppDraggablePortletsTemplateService.ɵprov = defineInjectable({ factory: function AppDraggablePortletsTemplateService_Factory() { return new AppDraggablePortletsTemplateService(); }, token: AppDraggablePortletsTemplateService, providedIn: "root" });
AppDraggablePortletsTemplateService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], AppDraggablePortletsTemplateService);

let AppDraggablePortletsTemplateComponent = class AppDraggablePortletsTemplateComponent {
    constructor() {
        this.title = 'bind-json-array-to-draggable-portlets';
        this.configFile = "/assets/json/data.json";
    }
    ngOnInit() {
    }
};
AppDraggablePortletsTemplateComponent = __decorate([
    Component({
        selector: 'app-draggable-portlets-template',
        template: `
    <app-load-portlets configFile="/assets/json/data.json"></app-load-portlets>
  `
    }),
    __metadata("design:paramtypes", [])
], AppDraggablePortletsTemplateComponent);

let PortletComponent = class PortletComponent {
    constructor() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", Observable)
], PortletComponent.prototype, "portlet", void 0);
PortletComponent = __decorate([
    Component({
        selector: 'app-portlet',
        template: " <div *ngIf=\"portlet\" class=\"portlet\">\r\n  <div class=\"portlet-header\">{{ portlet.header }}</div>\r\n  <div class=\"portlet-content\">\r\n    {{ portlet.content }}\r\n    <!--iframe src=\"https://www.youtube.com/embed/QH2-TGUlwu4?autoplay=1\" width=\"100%\" height=\"100%\" frameborder=\"0\" allowfullscreen></iframe>\r\n    -->\r\n  </div>\r\n</div>",
        encapsulation: ViewEncapsulation.None,
        styles: ["@import url(https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css);body{font-family:Arial,Helvetica,sans-serif;min-width:320px}table{font-size:1em}.ui-draggable,.ui-droppable{background-position:top}.column{width:33%;float:left;padding-bottom:100px}.portlet{margin:0 1em 1em 0;padding:.3em}.portlet-header{padding:.2em .3em;margin-bottom:.5em;position:relative}.portlet-toggle{position:absolute;top:50%;right:0;margin-top:-8px}.portlet-content{padding:.4em}.portlet-placeholder{border:1px dotted #000;margin:0 1em 1em 0;height:50px}"]
    }),
    __metadata("design:paramtypes", [])
], PortletComponent);

let PortletsGroupComponent = class PortletsGroupComponent {
    constructor() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", Observable)
], PortletsGroupComponent.prototype, "data", void 0);
PortletsGroupComponent = __decorate([
    Component({
        selector: 'app-portlets-group',
        template: "<div *ngFor=\"let column of (data | async)?.columns\" class=\"column\">\r\n  <div *ngFor=\"let portlet of column.portlets\">\r\n    <app-portlet [portlet]=\"portlet\"></app-portlet>\r\n  </div>\r\n</div>",
        encapsulation: ViewEncapsulation.None,
        styles: ["@import url(https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css);body{font-family:Arial,Helvetica,sans-serif;min-width:320px}table{font-size:1em}.ui-draggable,.ui-droppable{background-position:top}.column{width:33%;float:left;padding-bottom:100px}.portlet{margin:0 1em 1em 0;padding:.3em}.portlet-header{padding:.2em .3em;margin-bottom:.5em;position:relative}.portlet-toggle{position:absolute;top:50%;right:0;margin-top:-8px}.portlet-content{padding:.4em}.portlet-placeholder{border:1px dotted #000;margin:0 1em 1em 0;height:50px}"]
    }),
    __metadata("design:paramtypes", [])
], PortletsGroupComponent);

let ReturnJsonArrayService = class ReturnJsonArrayService {
    constructor(http) {
        this.http = http;
    }
    getScreen(url) {
        return this.http.get(url)
            .pipe(catchError(this.handleError('getScreen', [])));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
};
ReturnJsonArrayService.ctorParameters = () => [
    { type: HttpClient }
];
ReturnJsonArrayService.ɵprov = defineInjectable({ factory: function ReturnJsonArrayService_Factory() { return new ReturnJsonArrayService(inject(HttpClient)); }, token: ReturnJsonArrayService, providedIn: "root" });
ReturnJsonArrayService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [HttpClient])
], ReturnJsonArrayService);

require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
const $_ = $;
let LoadPortletsComponent = class LoadPortletsComponent {
    //@Output() notify: EventEmitter<any> = new EventEmitter<any>();
    constructor(service) {
        this.service = service;
        //this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js');
        //this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js');
        //this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-sortable/0.9.13/jquery-sortable-min.js');
        //this.loadScript('node_modules/app-draggable-portlets-template/assets/js/disable-selection.js');
    }
    /*
      loadScript(url) {
        console.log("preparing to load...");
        let node = document.createElement('script');
        node.src = url;
        node.type = "text/javascript";
        node.async = true;
        node.charset = "utf-8";
        document.head.appendChild(node);
      }
    */
    ngOnInit() {
        console.log(this.configFile);
        if (this.configFile) {
            this.loadFile(this.configFile);
            setTimeout(() => {
                this.loadJQuery();
            }, 300);
        }
    }
    loadJQuery() {
        this.data.subscribe(val => {
            let columnsCount = val.columnsCount;
            if (columnsCount <= 0) {
                columnsCount = 1;
            }
            let width = ((1 / columnsCount) * 100);
            $_(".column").width(width + "%");
        });
        $_(".portlet")
            .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
            .find(".portlet-header")
            .addClass("ui-widget-header ui-corner-all")
            .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
        $_(".portlet-toggle").on("click", function () {
            var icon = $_(this);
            icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
            icon.closest(".portlet").find(".portlet-content").toggle();
        });
        $_(".column").sortable({
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
};
LoadPortletsComponent.ctorParameters = () => [
    { type: ReturnJsonArrayService }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], LoadPortletsComponent.prototype, "configFile", void 0);
LoadPortletsComponent = __decorate([
    Component({
        selector: 'app-load-portlets',
        template: "<!--<div>\n  <ul>\n      <li>Load the file for change the portlets options <input type=\"file\" (change)=\"onChange($event)\"/></li>\n      <li>Example json file <a href=\"./assets/json/data.json\" target=\"_blank\">download here</a></li>\n  </ul>\n</div>\n\n<h3>Portlets</h3>-->\n<app-portlets-group [(data)]=\"data\"></app-portlets-group>",
        providers: [ReturnJsonArrayService],
        encapsulation: ViewEncapsulation.None,
        styles: ["@import url(https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css);body{font-family:Arial,Helvetica,sans-serif;min-width:320px}table{font-size:1em}.ui-draggable,.ui-droppable{background-position:top}.column{width:33%;float:left;padding-bottom:100px}.portlet{margin:0 1em 1em 0;padding:.3em}.portlet-header{padding:.2em .3em;margin-bottom:.5em;position:relative}.portlet-toggle{position:absolute;top:50%;right:0;margin-top:-8px}.portlet-content{padding:.4em}.portlet-placeholder{border:1px dotted #000;margin:0 1em 1em 0;height:50px}"]
    }),
    __metadata("design:paramtypes", [ReturnJsonArrayService])
], LoadPortletsComponent);

let AppDraggablePortletsTemplateModule = class AppDraggablePortletsTemplateModule {
};
AppDraggablePortletsTemplateModule = __decorate([
    NgModule({
        declarations: [
            AppDraggablePortletsTemplateComponent,
            PortletComponent,
            PortletsGroupComponent,
            LoadPortletsComponent
        ],
        imports: [
            BrowserModule,
            HttpClientModule
        ],
        providers: [ReturnJsonArrayService],
        exports: [
            AppDraggablePortletsTemplateComponent,
            PortletComponent,
            PortletsGroupComponent,
            LoadPortletsComponent
        ]
    })
], AppDraggablePortletsTemplateModule);

class Column {
}

class Data {
}

class Portlet {
}

/*
 * Public API Surface of app-draggable-portlets-template
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AppDraggablePortletsTemplateComponent, AppDraggablePortletsTemplateModule, AppDraggablePortletsTemplateService, Column, Data, LoadPortletsComponent, Portlet, PortletComponent, PortletsGroupComponent, ReturnJsonArrayService };
//# sourceMappingURL=app-draggable-portlets-template.js.map
