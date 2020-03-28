import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ReturnJsonArrayService } from '../return-json-array.service';
/*opcio antiga */
//'use strict';
//import * as jqueryProxy from 'jquery'
//const jquery: JQueryStatic = (<any>jqueryProxy).default || jqueryProxy
/* opcio nova */
'use strict';
import $ from 'jquery';
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
            $(".column").width(width + "%");
        });
        $(".portlet")
            .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
            .find(".portlet-header")
            .addClass("ui-widget-header ui-corner-all")
            .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
        $(".portlet-toggle").on("click", function () {
            var icon = $(this);
            icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
            icon.closest(".portlet").find(".portlet-content").toggle();
        });
        $(".column").sortable({
            connectWith: ".column",
            handle: ".portlet-header",
            cancel: ".portlet-toggle",
            placeholder: "portlet-placeholder ui-corner-all"
        });
    };
    LoadPortletsComponent.prototype.loadFile = function (configFile) {
        this.data = this.service.getScreen(configFile);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1wb3J0bGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2xvYWQvbG9hZC1wb3J0bGV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3RFLGlCQUFpQjtBQUVqQixlQUFlO0FBRWYsdUNBQXVDO0FBQ3ZDLHdFQUF3RTtBQUV4RSxnQkFBZ0I7QUFFaEIsWUFBWSxDQUFDO0FBRWIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQixPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUN6QyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQVMxQztJQU1FLGdFQUFnRTtJQUVoRSwrQkFBb0IsT0FBK0I7UUFBL0IsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7SUFFbkQsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQixVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNUO0lBQ0gsQ0FBQztJQUVELDBDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDckIsSUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztZQUNwQyxJQUFHLFlBQVksSUFBSSxDQUFDLEVBQUU7Z0JBQ3BCLFlBQVksR0FBRyxDQUFDLENBQUM7YUFDbEI7WUFDRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFDLFlBQVksQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBRSxTQUFTLENBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsQ0FBQyxDQUFFLFVBQVUsQ0FBRTthQUNaLFFBQVEsQ0FBRSw4REFBOEQsQ0FBRTthQUMxRSxJQUFJLENBQUUsaUJBQWlCLENBQUU7YUFDdkIsUUFBUSxDQUFFLGdDQUFnQyxDQUFFO2FBQzVDLE9BQU8sQ0FBRSxpRUFBaUUsQ0FBQyxDQUFDO1FBRWpGLENBQUMsQ0FBRSxpQkFBaUIsQ0FBRSxDQUFDLEVBQUUsQ0FBRSxPQUFPLEVBQUU7WUFDbEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFFLElBQUksQ0FBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUUsc0NBQXNDLENBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQVUsQ0FBRSxDQUFDLElBQUksQ0FBRSxrQkFBa0IsQ0FBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ0csQ0FBQyxDQUFFLFNBQVMsQ0FBRyxDQUFDLFFBQVEsQ0FBQztZQUM3QixXQUFXLEVBQUUsU0FBUztZQUN0QixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsV0FBVyxFQUFFLG1DQUFtQztTQUNqRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQVEsR0FBUixVQUFTLFVBQVU7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkE3QzRCLHNCQUFzQjs7SUFKMUM7UUFBUixLQUFLLEVBQUU7a0NBQWEsTUFBTTs2REFBQztJQUpqQixxQkFBcUI7UUFQakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixnV0FBNkM7WUFFN0MsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7eUNBUzZCLHNCQUFzQjtPQVJ4QyxxQkFBcUIsQ0ErRWpDO0lBQUQsNEJBQUM7Q0FBQSxBQS9FRCxJQStFQztTQS9FWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmV0dXJuSnNvbkFycmF5U2VydmljZSB9IGZyb20gJy4uL3JldHVybi1qc29uLWFycmF5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL2RhdGEnO1xuXG4vKm9wY2lvIGFudGlnYSAqL1xuXG4vLyd1c2Ugc3RyaWN0JztcblxuLy9pbXBvcnQgKiBhcyBqcXVlcnlQcm94eSBmcm9tICdqcXVlcnknXG4vL2NvbnN0IGpxdWVyeTogSlF1ZXJ5U3RhdGljID0gKDxhbnk+anF1ZXJ5UHJveHkpLmRlZmF1bHQgfHwganF1ZXJ5UHJveHlcblxuLyogb3BjaW8gbm92YSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbnJlcXVpcmUoJ2pxdWVyeS11aScpO1xucmVxdWlyZSgnanF1ZXJ5LXVpL3VpL3dpZGdldHMvc29ydGFibGUnKTtcbnJlcXVpcmUoJ2pxdWVyeS11aS91aS9kaXNhYmxlLXNlbGVjdGlvbicpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9hZC1wb3J0bGV0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkLXBvcnRsZXRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZC1wb3J0bGV0cy5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW1JldHVybkpzb25BcnJheVNlcnZpY2VdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExvYWRQb3J0bGV0c0NvbXBvbmVudCB7XG5cbiAgZGF0YTogT2JzZXJ2YWJsZTxEYXRhPjtcblxuICBASW5wdXQoKSBjb25maWdGaWxlOiBTdHJpbmc7XG5cbiAgLy9AT3V0cHV0KCkgbm90aWZ5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogUmV0dXJuSnNvbkFycmF5U2VydmljZSkge1xuICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jb25maWdGaWxlKTtcbiAgICBpZih0aGlzLmNvbmZpZ0ZpbGUpIHtcbiAgICAgIHRoaXMubG9hZEZpbGUodGhpcy5jb25maWdGaWxlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRKUXVlcnkoKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEpRdWVyeSgpIHtcbiAgICB0aGlzLmRhdGEuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICBsZXQgY29sdW1uc0NvdW50ID0gdmFsLmNvbHVtbnNDb3VudDtcbiAgICAgIGlmKGNvbHVtbnNDb3VudCA8PSAwKSB7XG4gICAgICAgIGNvbHVtbnNDb3VudCA9IDE7XG4gICAgICB9XG4gICAgICBsZXQgd2lkdGggPSAoKDEvY29sdW1uc0NvdW50KSoxMDApO1xuICAgICAgJCggXCIuY29sdW1uXCIgKS53aWR0aCh3aWR0aCArIFwiJVwiKTtcbiAgICB9KTtcbiAgICAkKCBcIi5wb3J0bGV0XCIgKVxuICAgICAgLmFkZENsYXNzKCBcInVpLXdpZGdldCB1aS13aWRnZXQtY29udGVudCB1aS1oZWxwZXItY2xlYXJmaXggdWktY29ybmVyLWFsbFwiIClcbiAgICAgIC5maW5kKCBcIi5wb3J0bGV0LWhlYWRlclwiIClcbiAgICAgICAgLmFkZENsYXNzKCBcInVpLXdpZGdldC1oZWFkZXIgdWktY29ybmVyLWFsbFwiIClcbiAgICAgICAgLnByZXBlbmQoIFwiPHNwYW4gY2xhc3M9J3VpLWljb24gdWktaWNvbi1taW51c3RoaWNrIHBvcnRsZXQtdG9nZ2xlJz48L3NwYW4+XCIpO1xuICAgICAgICBcbiAgICAkKCBcIi5wb3J0bGV0LXRvZ2dsZVwiICkub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaWNvbiA9ICQoIHRoaXMgKTtcbiAgICAgIGljb24udG9nZ2xlQ2xhc3MoIFwidWktaWNvbi1taW51c3RoaWNrIHVpLWljb24tcGx1c3RoaWNrXCIgKTtcbiAgICAgIGljb24uY2xvc2VzdCggXCIucG9ydGxldFwiICkuZmluZCggXCIucG9ydGxldC1jb250ZW50XCIgKS50b2dnbGUoKTtcbiAgICB9KTtcbiAgICAoPGFueT4kKCBcIi5jb2x1bW5cIiApKS5zb3J0YWJsZSh7XG4gICAgICBjb25uZWN0V2l0aDogXCIuY29sdW1uXCIsXG4gICAgICBoYW5kbGU6IFwiLnBvcnRsZXQtaGVhZGVyXCIsXG4gICAgICBjYW5jZWw6IFwiLnBvcnRsZXQtdG9nZ2xlXCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCJwb3J0bGV0LXBsYWNlaG9sZGVyIHVpLWNvcm5lci1hbGxcIlxuICAgIH0pO1xuICB9XG5cbiAgbG9hZEZpbGUoY29uZmlnRmlsZSkge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuc2VydmljZS5nZXRTY3JlZW4oY29uZmlnRmlsZSk7XG4gICAgdGhpcy5kYXRhLnN1YnNjcmliZSh2YWwgPT4gY29uc29sZS5sb2codmFsKSk7XG4gIH1cbi8qXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50OicgKyBldmVudCk7XG4gICAgdmFyIGZpbGU6IEZpbGUgPSBldmVudC5zcmNFbGVtZW50LmZpbGVzWzBdO1xuICAgIHZhciB1cmw7XG4gICAgY29uc29sZS5sb2coJ2ZpbGU6JyArIGZpbGUpO1xuICAgIGNvbnNvbGUubG9nKCdmaWxlLm5hbWU6JyArIGZpbGUubmFtZSk7XG4gICAgY29uc29sZS5sb2coJ2ZpbGUudHlwZTonICsgZmlsZS50eXBlKTtcbiAgICBpZihmaWxlICE9IG51bGwpIHtcbiAgICAgIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9ICcuJyArIGVudmlyb25tZW50LmRpcmVjdG9yeSArICcvYXNzZXRzL2pzb24vZGF0YS5qc29uJztcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3VybDonICsgdXJsKTtcbiAgICBpZih1cmwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5zZXJ2aWNlLmdldFNjcmVlbih1cmwpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZW52aWVtJyk7XG4gICAgdGhpcy5ub3RpZnkuZW1pdCh0aGlzLmRhdGEpO1xuICAgIGNvbnNvbGUubG9nKCdmaSBvbkNoYW5nZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkSlF1ZXJ5KCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuKi9cbn1cbiJdfQ==