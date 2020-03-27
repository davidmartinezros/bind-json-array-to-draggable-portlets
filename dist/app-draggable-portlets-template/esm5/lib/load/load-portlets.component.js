import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ReturnJsonArrayService } from '../return-json-array.service';
//declare var $ :any;
//declare var jQuery: any;
//import * as $ from 'jquery';
'use strict';
//import * as $ from 'jquery';
import * as jqueryProxy from 'jquery';
var jquery = jqueryProxy.default || jqueryProxy;
require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
require('jquery-ui/ui/disable-selection');
var LoadPortletsComponent = /** @class */ (function () {
    //@Output() notify: EventEmitter<any> = new EventEmitter<any>();
    function LoadPortletsComponent(service) {
        this.service = service;
    }
    LoadPortletsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.configFile);
        if (this.configFile) {
            this.loadFile(this.configFile);
            setTimeout(function () {
                _this.loadJQuery();
            }, 300);
        }
    };
    LoadPortletsComponent.prototype.loadJQuery = function () {
        this.data.subscribe(function (val) {
            var columnsCount = val.columnsCount;
            if (columnsCount <= 0) {
                columnsCount = 1;
            }
            var width = ((1 / columnsCount) * 100);
            jquery(".column").width(width + "%");
        });
        jquery(".column").sortable({
            connectWith: ".column",
            handle: ".portlet-header",
            cancel: ".portlet-toggle",
            placeholder: "portlet-placeholder ui-corner-all"
        });
        jquery(".portlet")
            .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
            .find(".portlet-header")
            .addClass("ui-widget-header ui-corner-all")
            .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
        jquery(".portlet-toggle").on("click", function () {
            var icon = jquery(this);
            icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
            icon.closest(".portlet").find(".portlet-content").toggle();
        });
    };
    LoadPortletsComponent.prototype.loadFile = function (configFile) {
        this.data = this.service.getScreen(/*'..'*/ /*+ environment.directory + */ configFile);
        this.data.subscribe(function (val) { return console.log(val); });
    };
    LoadPortletsComponent.ctorParameters = function () { return [
        { type: ReturnJsonArrayService }
    ]; };
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
    return LoadPortletsComponent;
}());
export { LoadPortletsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1wb3J0bGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2xvYWQvbG9hZC1wb3J0bGV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXdCLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUd0RSxxQkFBcUI7QUFFckIsMEJBQTBCO0FBRTFCLDhCQUE4QjtBQUU5QixZQUFZLENBQUM7QUFFYiw4QkFBOEI7QUFFOUIsT0FBTyxLQUFLLFdBQVcsTUFBTSxRQUFRLENBQUE7QUFDckMsSUFBTSxNQUFNLEdBQXVCLFdBQVksQ0FBQyxPQUFPLElBQUksV0FBVyxDQUFBO0FBRXRFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQixPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUN6QyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQVMxQztJQU1FLGdFQUFnRTtJQUVoRSwrQkFBb0IsT0FBK0I7UUFBL0IsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7SUFFbkQsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQixVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNUO0lBQ0gsQ0FBQztJQUVELDBDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDckIsSUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztZQUNwQyxJQUFHLFlBQVksSUFBSSxDQUFDLEVBQUU7Z0JBQ3BCLFlBQVksR0FBRyxDQUFDLENBQUM7YUFDbEI7WUFDRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFDLFlBQVksQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBRSxTQUFTLENBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ0csTUFBTSxDQUFFLFNBQVMsQ0FBRyxDQUFDLFFBQVEsQ0FBQztZQUNsQyxXQUFXLEVBQUUsU0FBUztZQUN0QixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsV0FBVyxFQUFFLG1DQUFtQztTQUNqRCxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUUsVUFBVSxDQUFFO2FBQ2pCLFFBQVEsQ0FBRSw4REFBOEQsQ0FBRTthQUMxRSxJQUFJLENBQUUsaUJBQWlCLENBQUU7YUFDdkIsUUFBUSxDQUFFLGdDQUFnQyxDQUFFO2FBQzVDLE9BQU8sQ0FBRSxpRUFBaUUsQ0FBQyxDQUFDO1FBRWpGLE1BQU0sQ0FBRSxpQkFBaUIsQ0FBRSxDQUFDLEVBQUUsQ0FBRSxPQUFPLEVBQUU7WUFDdkMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFFLElBQUksQ0FBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUUsc0NBQXNDLENBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQVUsQ0FBRSxDQUFDLElBQUksQ0FBRSxrQkFBa0IsQ0FBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdDQUFRLEdBQVIsVUFBUyxVQUFVO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLDhCQUE4QixDQUFBLFVBQVUsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQTlDNEIsc0JBQXNCOztJQUoxQztRQUFSLEtBQUssRUFBRTtrQ0FBYSxNQUFNOzZEQUFDO0lBSmpCLHFCQUFxQjtRQVBqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLGdXQUE2QztZQUU3QyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7U0FDdEMsQ0FBQzt5Q0FTNkIsc0JBQXNCO09BUnhDLHFCQUFxQixDQWdGakM7SUFBRCw0QkFBQztDQUFBLEFBaEZELElBZ0ZDO1NBaEZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmV0dXJuSnNvbkFycmF5U2VydmljZSB9IGZyb20gJy4uL3JldHVybi1qc29uLWFycmF5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL2RhdGEnO1xuXG4vL2RlY2xhcmUgdmFyICQgOmFueTtcblxuLy9kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcblxuLy9pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuLy9pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSc7XG5cbmltcG9ydCAqIGFzIGpxdWVyeVByb3h5IGZyb20gJ2pxdWVyeSdcbmNvbnN0IGpxdWVyeTogSlF1ZXJ5U3RhdGljID0gKDxhbnk+anF1ZXJ5UHJveHkpLmRlZmF1bHQgfHwganF1ZXJ5UHJveHlcblxucmVxdWlyZSgnanF1ZXJ5LXVpJyk7XG5yZXF1aXJlKCdqcXVlcnktdWkvdWkvd2lkZ2V0cy9zb3J0YWJsZScpO1xucmVxdWlyZSgnanF1ZXJ5LXVpL3VpL2Rpc2FibGUtc2VsZWN0aW9uJyk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2FkLXBvcnRsZXRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWQtcG9ydGxldHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkLXBvcnRsZXRzLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbUmV0dXJuSnNvbkFycmF5U2VydmljZV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTG9hZFBvcnRsZXRzQ29tcG9uZW50IHtcblxuICBkYXRhOiBPYnNlcnZhYmxlPERhdGE+O1xuXG4gIEBJbnB1dCgpIGNvbmZpZ0ZpbGU6IFN0cmluZztcblxuICAvL0BPdXRwdXQoKSBub3RpZnk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBSZXR1cm5Kc29uQXJyYXlTZXJ2aWNlKSB7XG4gICAgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbmZpZ0ZpbGUpO1xuICAgIGlmKHRoaXMuY29uZmlnRmlsZSkge1xuICAgICAgdGhpcy5sb2FkRmlsZSh0aGlzLmNvbmZpZ0ZpbGUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZEpRdWVyeSgpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSlF1ZXJ5KCkge1xuICAgIHRoaXMuZGF0YS5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgIGxldCBjb2x1bW5zQ291bnQgPSB2YWwuY29sdW1uc0NvdW50O1xuICAgICAgaWYoY29sdW1uc0NvdW50IDw9IDApIHtcbiAgICAgICAgY29sdW1uc0NvdW50ID0gMTtcbiAgICAgIH1cbiAgICAgIGxldCB3aWR0aCA9ICgoMS9jb2x1bW5zQ291bnQpKjEwMCk7XG4gICAgICBqcXVlcnkoIFwiLmNvbHVtblwiICkud2lkdGgod2lkdGggKyBcIiVcIik7XG4gICAgfSk7XG4gICAgKDxhbnk+anF1ZXJ5KCBcIi5jb2x1bW5cIiApKS5zb3J0YWJsZSh7XG4gICAgICBjb25uZWN0V2l0aDogXCIuY29sdW1uXCIsXG4gICAgICBoYW5kbGU6IFwiLnBvcnRsZXQtaGVhZGVyXCIsXG4gICAgICBjYW5jZWw6IFwiLnBvcnRsZXQtdG9nZ2xlXCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCJwb3J0bGV0LXBsYWNlaG9sZGVyIHVpLWNvcm5lci1hbGxcIlxuICAgIH0pO1xuIFxuICAgIGpxdWVyeSggXCIucG9ydGxldFwiIClcbiAgICAgIC5hZGRDbGFzcyggXCJ1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktaGVscGVyLWNsZWFyZml4IHVpLWNvcm5lci1hbGxcIiApXG4gICAgICAuZmluZCggXCIucG9ydGxldC1oZWFkZXJcIiApXG4gICAgICAgIC5hZGRDbGFzcyggXCJ1aS13aWRnZXQtaGVhZGVyIHVpLWNvcm5lci1hbGxcIiApXG4gICAgICAgIC5wcmVwZW5kKCBcIjxzcGFuIGNsYXNzPSd1aS1pY29uIHVpLWljb24tbWludXN0aGljayBwb3J0bGV0LXRvZ2dsZSc+PC9zcGFuPlwiKTtcbiAgICAgICAgXG4gICAganF1ZXJ5KCBcIi5wb3J0bGV0LXRvZ2dsZVwiICkub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaWNvbiA9IGpxdWVyeSggdGhpcyApO1xuICAgICAgaWNvbi50b2dnbGVDbGFzcyggXCJ1aS1pY29uLW1pbnVzdGhpY2sgdWktaWNvbi1wbHVzdGhpY2tcIiApO1xuICAgICAgaWNvbi5jbG9zZXN0KCBcIi5wb3J0bGV0XCIgKS5maW5kKCBcIi5wb3J0bGV0LWNvbnRlbnRcIiApLnRvZ2dsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZEZpbGUoY29uZmlnRmlsZSkge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuc2VydmljZS5nZXRTY3JlZW4oLyonLi4nKi8gLyorIGVudmlyb25tZW50LmRpcmVjdG9yeSArICovY29uZmlnRmlsZSk7XG4gICAgdGhpcy5kYXRhLnN1YnNjcmliZSh2YWwgPT4gY29uc29sZS5sb2codmFsKSk7XG4gIH1cbi8qXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50OicgKyBldmVudCk7XG4gICAgdmFyIGZpbGU6IEZpbGUgPSBldmVudC5zcmNFbGVtZW50LmZpbGVzWzBdO1xuICAgIHZhciB1cmw7XG4gICAgY29uc29sZS5sb2coJ2ZpbGU6JyArIGZpbGUpO1xuICAgIGNvbnNvbGUubG9nKCdmaWxlLm5hbWU6JyArIGZpbGUubmFtZSk7XG4gICAgY29uc29sZS5sb2coJ2ZpbGUudHlwZTonICsgZmlsZS50eXBlKTtcbiAgICBpZihmaWxlICE9IG51bGwpIHtcbiAgICAgIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9ICcuJyArIGVudmlyb25tZW50LmRpcmVjdG9yeSArICcvYXNzZXRzL2pzb24vZGF0YS5qc29uJztcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3VybDonICsgdXJsKTtcbiAgICBpZih1cmwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5zZXJ2aWNlLmdldFNjcmVlbih1cmwpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZW52aWVtJyk7XG4gICAgdGhpcy5ub3RpZnkuZW1pdCh0aGlzLmRhdGEpO1xuICAgIGNvbnNvbGUubG9nKCdmaSBvbkNoYW5nZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkSlF1ZXJ5KCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuKi9cbn1cbiJdfQ==