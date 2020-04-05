import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ReturnJsonArrayService } from '../return-json-array.service';
/*opcio antiga */
//'use strict';
//import * as jqueryProxy from 'jquery'
//const jquery: JQueryStatic = (<any>jqueryProxy).default || jqueryProxy
/* opcio nova */
//'use strict';
//import * as $_ from 'jquery';
//const $ = $_;
//require('jquery-ui');
//require('jquery-ui/ui/widgets/sortable');
//require('jquery-ui/ui/disable-selection');
/* opcio mes nova */
//declare var $: any;
//require('jquery-ui');
//require('jquery-ui/ui/widgets/sortable');
/* ultima opcio */
import * as $ from 'jquery';
require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
var $_ = $;
var LoadPortletsComponent = /** @class */ (function () {
    //@Output() notify: EventEmitter<any> = new EventEmitter<any>();
    function LoadPortletsComponent(service) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1wb3J0bGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2xvYWQvbG9hZC1wb3J0bGV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3RFLGlCQUFpQjtBQUVqQixlQUFlO0FBRWYsdUNBQXVDO0FBQ3ZDLHdFQUF3RTtBQUV4RSxnQkFBZ0I7QUFFaEIsZUFBZTtBQUVmLCtCQUErQjtBQUUvQixlQUFlO0FBRWYsdUJBQXVCO0FBQ3ZCLDJDQUEyQztBQUMzQyw0Q0FBNEM7QUFFNUMsb0JBQW9CO0FBRXBCLHFCQUFxQjtBQUVyQix1QkFBdUI7QUFDdkIsMkNBQTJDO0FBRTNDLGtCQUFrQjtBQUVsQixPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDckIsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFFekMsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBU2I7SUFNRSxnRUFBZ0U7SUFFaEUsK0JBQW9CLE9BQStCO1FBQS9CLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBQ2pELHVGQUF1RjtRQUN2Riw2RkFBNkY7UUFDN0YsMEdBQTBHO1FBQzFHLGlHQUFpRztJQUNuRyxDQUFDO0lBQ0g7Ozs7Ozs7Ozs7TUFVRTtJQUNBLHdDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQixVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNUO0lBQ0gsQ0FBQztJQUVELDBDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDckIsSUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztZQUNwQyxJQUFHLFlBQVksSUFBSSxDQUFDLEVBQUU7Z0JBQ3BCLFlBQVksR0FBRyxDQUFDLENBQUM7YUFDbEI7WUFDRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFDLFlBQVksQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLEVBQUUsQ0FBRSxTQUFTLENBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFFLFVBQVUsQ0FBRTthQUNiLFFBQVEsQ0FBRSw4REFBOEQsQ0FBRTthQUMxRSxJQUFJLENBQUUsaUJBQWlCLENBQUU7YUFDdkIsUUFBUSxDQUFFLGdDQUFnQyxDQUFFO2FBQzVDLE9BQU8sQ0FBRSxpRUFBaUUsQ0FBQyxDQUFDO1FBRWpGLEVBQUUsQ0FBRSxpQkFBaUIsQ0FBRSxDQUFDLEVBQUUsQ0FBRSxPQUFPLEVBQUU7WUFDbkMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFFLElBQUksQ0FBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUUsc0NBQXNDLENBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQVUsQ0FBRSxDQUFDLElBQUksQ0FBRSxrQkFBa0IsQ0FBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ0csRUFBRSxDQUFFLFNBQVMsQ0FBRyxDQUFDLFFBQVEsQ0FBQztZQUM5QixXQUFXLEVBQUUsU0FBUztZQUN0QixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsV0FBVyxFQUFFLG1DQUFtQztTQUNqRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQVEsR0FBUixVQUFTLFVBQVU7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkExRDRCLHNCQUFzQjs7SUFKMUM7UUFBUixLQUFLLEVBQUU7a0NBQWEsTUFBTTs2REFBQztJQUpqQixxQkFBcUI7UUFQakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixnV0FBNkM7WUFFN0MsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7eUNBUzZCLHNCQUFzQjtPQVJ4QyxxQkFBcUIsQ0E0RmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTVGRCxJQTRGQztTQTVGWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJldHVybkpzb25BcnJheVNlcnZpY2UgfSBmcm9tICcuLi9yZXR1cm4tanNvbi1hcnJheS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL2RhdGEnO1xyXG5cclxuLypvcGNpbyBhbnRpZ2EgKi9cclxuXHJcbi8vJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy9pbXBvcnQgKiBhcyBqcXVlcnlQcm94eSBmcm9tICdqcXVlcnknXHJcbi8vY29uc3QganF1ZXJ5OiBKUXVlcnlTdGF0aWMgPSAoPGFueT5qcXVlcnlQcm94eSkuZGVmYXVsdCB8fCBqcXVlcnlQcm94eVxyXG5cclxuLyogb3BjaW8gbm92YSAqL1xyXG5cclxuLy8ndXNlIHN0cmljdCc7XHJcblxyXG4vL2ltcG9ydCAqIGFzICRfIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4vL2NvbnN0ICQgPSAkXztcclxuXHJcbi8vcmVxdWlyZSgnanF1ZXJ5LXVpJyk7XHJcbi8vcmVxdWlyZSgnanF1ZXJ5LXVpL3VpL3dpZGdldHMvc29ydGFibGUnKTtcclxuLy9yZXF1aXJlKCdqcXVlcnktdWkvdWkvZGlzYWJsZS1zZWxlY3Rpb24nKTtcclxuXHJcbi8qIG9wY2lvIG1lcyBub3ZhICovXHJcblxyXG4vL2RlY2xhcmUgdmFyICQ6IGFueTtcclxuXHJcbi8vcmVxdWlyZSgnanF1ZXJ5LXVpJyk7XHJcbi8vcmVxdWlyZSgnanF1ZXJ5LXVpL3VpL3dpZGdldHMvc29ydGFibGUnKTtcclxuXHJcbi8qIHVsdGltYSBvcGNpbyAqL1xyXG5cclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xyXG5cclxucmVxdWlyZSgnanF1ZXJ5LXVpJyk7XHJcbnJlcXVpcmUoJ2pxdWVyeS11aS91aS93aWRnZXRzL3NvcnRhYmxlJyk7XHJcblxyXG5jb25zdCAkXyA9ICQ7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1sb2FkLXBvcnRsZXRzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZC1wb3J0bGV0cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZC1wb3J0bGV0cy5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW1JldHVybkpzb25BcnJheVNlcnZpY2VdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIExvYWRQb3J0bGV0c0NvbXBvbmVudCB7XHJcblxyXG4gIGRhdGE6IE9ic2VydmFibGU8RGF0YT47XHJcblxyXG4gIEBJbnB1dCgpIGNvbmZpZ0ZpbGU6IFN0cmluZztcclxuXHJcbiAgLy9AT3V0cHV0KCkgbm90aWZ5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFJldHVybkpzb25BcnJheVNlcnZpY2UpIHtcclxuICAgIC8vdGhpcy5sb2FkU2NyaXB0KCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9qcXVlcnkvMy40LjEvanF1ZXJ5Lm1pbi5qcycpO1xyXG4gICAgLy90aGlzLmxvYWRTY3JpcHQoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2pxdWVyeXVpLzEuMTIuMS9qcXVlcnktdWkubWluLmpzJyk7XHJcbiAgICAvL3RoaXMubG9hZFNjcmlwdCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5LXNvcnRhYmxlLzAuOS4xMy9qcXVlcnktc29ydGFibGUtbWluLmpzJyk7XHJcbiAgICAvL3RoaXMubG9hZFNjcmlwdCgnbm9kZV9tb2R1bGVzL2FwcC1kcmFnZ2FibGUtcG9ydGxldHMtdGVtcGxhdGUvYXNzZXRzL2pzL2Rpc2FibGUtc2VsZWN0aW9uLmpzJyk7XHJcbiAgfVxyXG4vKlxyXG4gIGxvYWRTY3JpcHQodXJsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInByZXBhcmluZyB0byBsb2FkLi4uXCIpO1xyXG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIG5vZGUuc3JjID0gdXJsO1xyXG4gICAgbm9kZS50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcclxuICAgIG5vZGUuYXN5bmMgPSB0cnVlO1xyXG4gICAgbm9kZS5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xyXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChub2RlKTtcclxuICB9XHJcbiovXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbmZpZ0ZpbGUpO1xyXG4gICAgaWYodGhpcy5jb25maWdGaWxlKSB7XHJcbiAgICAgIHRoaXMubG9hZEZpbGUodGhpcy5jb25maWdGaWxlKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2FkSlF1ZXJ5KCk7XHJcbiAgICAgIH0sIDMwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2FkSlF1ZXJ5KCkge1xyXG4gICAgdGhpcy5kYXRhLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICBsZXQgY29sdW1uc0NvdW50ID0gdmFsLmNvbHVtbnNDb3VudDtcclxuICAgICAgaWYoY29sdW1uc0NvdW50IDw9IDApIHtcclxuICAgICAgICBjb2x1bW5zQ291bnQgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCB3aWR0aCA9ICgoMS9jb2x1bW5zQ291bnQpKjEwMCk7XHJcbiAgICAgICRfKCBcIi5jb2x1bW5cIiApLndpZHRoKHdpZHRoICsgXCIlXCIpO1xyXG4gICAgfSk7XHJcbiAgICAkXyggXCIucG9ydGxldFwiIClcclxuICAgICAgLmFkZENsYXNzKCBcInVpLXdpZGdldCB1aS13aWRnZXQtY29udGVudCB1aS1oZWxwZXItY2xlYXJmaXggdWktY29ybmVyLWFsbFwiIClcclxuICAgICAgLmZpbmQoIFwiLnBvcnRsZXQtaGVhZGVyXCIgKVxyXG4gICAgICAgIC5hZGRDbGFzcyggXCJ1aS13aWRnZXQtaGVhZGVyIHVpLWNvcm5lci1hbGxcIiApXHJcbiAgICAgICAgLnByZXBlbmQoIFwiPHNwYW4gY2xhc3M9J3VpLWljb24gdWktaWNvbi1taW51c3RoaWNrIHBvcnRsZXQtdG9nZ2xlJz48L3NwYW4+XCIpO1xyXG4gICAgICAgIFxyXG4gICAgJF8oIFwiLnBvcnRsZXQtdG9nZ2xlXCIgKS5vbiggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGljb24gPSAkXyggdGhpcyApO1xyXG4gICAgICBpY29uLnRvZ2dsZUNsYXNzKCBcInVpLWljb24tbWludXN0aGljayB1aS1pY29uLXBsdXN0aGlja1wiICk7XHJcbiAgICAgIGljb24uY2xvc2VzdCggXCIucG9ydGxldFwiICkuZmluZCggXCIucG9ydGxldC1jb250ZW50XCIgKS50b2dnbGUoKTtcclxuICAgIH0pO1xyXG4gICAgKDxhbnk+JF8oIFwiLmNvbHVtblwiICkpLnNvcnRhYmxlKHtcclxuICAgICAgY29ubmVjdFdpdGg6IFwiLmNvbHVtblwiLFxyXG4gICAgICBoYW5kbGU6IFwiLnBvcnRsZXQtaGVhZGVyXCIsXHJcbiAgICAgIGNhbmNlbDogXCIucG9ydGxldC10b2dnbGVcIixcclxuICAgICAgcGxhY2Vob2xkZXI6IFwicG9ydGxldC1wbGFjZWhvbGRlciB1aS1jb3JuZXItYWxsXCJcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbG9hZEZpbGUoY29uZmlnRmlsZSkge1xyXG4gICAgdGhpcy5kYXRhID0gdGhpcy5zZXJ2aWNlLmdldFNjcmVlbihjb25maWdGaWxlKTtcclxuICAgIHRoaXMuZGF0YS5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKHZhbCkpO1xyXG4gIH1cclxuLypcclxuICBvbkNoYW5nZShldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coJ2V2ZW50OicgKyBldmVudCk7XHJcbiAgICB2YXIgZmlsZTogRmlsZSA9IGV2ZW50LnNyY0VsZW1lbnQuZmlsZXNbMF07XHJcbiAgICB2YXIgdXJsO1xyXG4gICAgY29uc29sZS5sb2coJ2ZpbGU6JyArIGZpbGUpO1xyXG4gICAgY29uc29sZS5sb2coJ2ZpbGUubmFtZTonICsgZmlsZS5uYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKCdmaWxlLnR5cGU6JyArIGZpbGUudHlwZSk7XHJcbiAgICBpZihmaWxlICE9IG51bGwpIHtcclxuICAgICAgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVybCA9ICcuJyArIGVudmlyb25tZW50LmRpcmVjdG9yeSArICcvYXNzZXRzL2pzb24vZGF0YS5qc29uJztcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCd1cmw6JyArIHVybCk7XHJcbiAgICBpZih1cmwgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLnNlcnZpY2UuZ2V0U2NyZWVuKHVybCk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnZW52aWVtJyk7XHJcbiAgICB0aGlzLm5vdGlmeS5lbWl0KHRoaXMuZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZygnZmkgb25DaGFuZ2UnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRKUXVlcnkoKTtcclxuICAgIH0sIDMwMCk7XHJcbiAgfVxyXG4qL1xyXG59XHJcbiJdfQ==