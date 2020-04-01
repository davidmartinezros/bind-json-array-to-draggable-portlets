import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ReturnJsonArrayService } from '../return-json-array.service';
/*opcio antiga */
//'use strict';
//import * as jqueryProxy from 'jquery'
//const jquery: JQueryStatic = (<any>jqueryProxy).default || jqueryProxy
/* opcio nova */
//'use strict';
import * as jQuery_ from 'jquery';
var jQuery = jQuery_;
require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
//require('jquery-ui/ui/disable-selection');
/* opcio mes nova */
//declare var jQuery: any;
var LoadPortletsComponent = /** @class */ (function () {
    //@Output() notify: EventEmitter<any> = new EventEmitter<any>();
    function LoadPortletsComponent(service) {
        this.service = service;
        this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js');
        this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js');
        this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery-sortable/0.9.13/jquery-sortable-min.js');
        //this.loadScript('node_modules/app-draggable-portlets-template/assets/js/disable-selection.js');
    }
    LoadPortletsComponent.prototype.loadScript = function (url) {
        console.log("preparing to load...");
        var node = document.createElement('script');
        node.src = url;
        node.type = "text/javascript";
        node.async = true;
        node.charset = "utf-8";
        document.head.appendChild(node);
    };
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
            jQuery(".column").width(width + "%");
        });
        jQuery(".portlet")
            .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
            .find(".portlet-header")
            .addClass("ui-widget-header ui-corner-all")
            .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
        jQuery(".portlet-toggle").on("click", function () {
            var icon = jQuery(this);
            icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
            icon.closest(".portlet").find(".portlet-content").toggle();
        });
        jQuery(".column").sortable({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1wb3J0bGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2xvYWQvbG9hZC1wb3J0bGV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3RFLGlCQUFpQjtBQUVqQixlQUFlO0FBRWYsdUNBQXVDO0FBQ3ZDLHdFQUF3RTtBQUV4RSxnQkFBZ0I7QUFFaEIsZUFBZTtBQUVmLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBRWxDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUV2QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDckIsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFDekMsNENBQTRDO0FBRTVDLG9CQUFvQjtBQUVwQiwwQkFBMEI7QUFTMUI7SUFNRSxnRUFBZ0U7SUFFaEUsK0JBQW9CLE9BQStCO1FBQS9CLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsbUVBQW1FLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsVUFBVSxDQUFDLHlFQUF5RSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzRkFBc0YsQ0FBQyxDQUFDO1FBQ3hHLGlHQUFpRztJQUNuRyxDQUFDO0lBRUQsMENBQVUsR0FBVixVQUFXLEdBQUc7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FB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aW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJldHVybkpzb25BcnJheVNlcnZpY2UgfSBmcm9tICcuLi9yZXR1cm4tanNvbi1hcnJheS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9kYXRhJztcblxuLypvcGNpbyBhbnRpZ2EgKi9cblxuLy8ndXNlIHN0cmljdCc7XG5cbi8vaW1wb3J0ICogYXMganF1ZXJ5UHJveHkgZnJvbSAnanF1ZXJ5J1xuLy9jb25zdCBqcXVlcnk6IEpRdWVyeVN0YXRpYyA9ICg8YW55PmpxdWVyeVByb3h5KS5kZWZhdWx0IHx8IGpxdWVyeVByb3h5XG5cbi8qIG9wY2lvIG5vdmEgKi9cblxuLy8ndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIGpRdWVyeV8gZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgalF1ZXJ5ID0galF1ZXJ5XztcblxucmVxdWlyZSgnanF1ZXJ5LXVpJyk7XG5yZXF1aXJlKCdqcXVlcnktdWkvdWkvd2lkZ2V0cy9zb3J0YWJsZScpO1xuLy9yZXF1aXJlKCdqcXVlcnktdWkvdWkvZGlzYWJsZS1zZWxlY3Rpb24nKTtcblxuLyogb3BjaW8gbWVzIG5vdmEgKi9cblxuLy9kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvYWQtcG9ydGxldHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZC1wb3J0bGV0cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWQtcG9ydGxldHMuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbUmV0dXJuSnNvbkFycmF5U2VydmljZV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTG9hZFBvcnRsZXRzQ29tcG9uZW50IHtcblxuICBkYXRhOiBPYnNlcnZhYmxlPERhdGE+O1xuXG4gIEBJbnB1dCgpIGNvbmZpZ0ZpbGU6IFN0cmluZztcblxuICAvL0BPdXRwdXQoKSBub3RpZnk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBSZXR1cm5Kc29uQXJyYXlTZXJ2aWNlKSB7XG4gICAgdGhpcy5sb2FkU2NyaXB0KCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9qcXVlcnkvMy40LjEvanF1ZXJ5Lm1pbi5qcycpO1xuICAgIHRoaXMubG9hZFNjcmlwdCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5dWkvMS4xMi4xL2pxdWVyeS11aS5taW4uanMnKTtcbiAgICB0aGlzLmxvYWRTY3JpcHQoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2pxdWVyeS1zb3J0YWJsZS8wLjkuMTMvanF1ZXJ5LXNvcnRhYmxlLW1pbi5qcycpO1xuICAgIC8vdGhpcy5sb2FkU2NyaXB0KCdub2RlX21vZHVsZXMvYXBwLWRyYWdnYWJsZS1wb3J0bGV0cy10ZW1wbGF0ZS9hc3NldHMvanMvZGlzYWJsZS1zZWxlY3Rpb24uanMnKTtcbiAgfVxuXG4gIGxvYWRTY3JpcHQodXJsKSB7XG4gICAgY29uc29sZS5sb2coXCJwcmVwYXJpbmcgdG8gbG9hZC4uLlwiKTtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIG5vZGUuc3JjID0gdXJsO1xuICAgIG5vZGUudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgbm9kZS5hc3luYyA9IHRydWU7XG4gICAgbm9kZS5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbmZpZ0ZpbGUpO1xuICAgIGlmKHRoaXMuY29uZmlnRmlsZSkge1xuICAgICAgdGhpcy5sb2FkRmlsZSh0aGlzLmNvbmZpZ0ZpbGUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZEpRdWVyeSgpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSlF1ZXJ5KCkge1xuICAgIHRoaXMuZGF0YS5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgIGxldCBjb2x1bW5zQ291bnQgPSB2YWwuY29sdW1uc0NvdW50O1xuICAgICAgaWYoY29sdW1uc0NvdW50IDw9IDApIHtcbiAgICAgICAgY29sdW1uc0NvdW50ID0gMTtcbiAgICAgIH1cbiAgICAgIGxldCB3aWR0aCA9ICgoMS9jb2x1bW5zQ291bnQpKjEwMCk7XG4gICAgICBqUXVlcnkoIFwiLmNvbHVtblwiICkud2lkdGgod2lkdGggKyBcIiVcIik7XG4gICAgfSk7XG4gICAgalF1ZXJ5KCBcIi5wb3J0bGV0XCIgKVxuICAgICAgLmFkZENsYXNzKCBcInVpLXdpZGdldCB1aS13aWRnZXQtY29udGVudCB1aS1oZWxwZXItY2xlYXJmaXggdWktY29ybmVyLWFsbFwiIClcbiAgICAgIC5maW5kKCBcIi5wb3J0bGV0LWhlYWRlclwiIClcbiAgICAgICAgLmFkZENsYXNzKCBcInVpLXdpZGdldC1oZWFkZXIgdWktY29ybmVyLWFsbFwiIClcbiAgICAgICAgLnByZXBlbmQoIFwiPHNwYW4gY2xhc3M9J3VpLWljb24gdWktaWNvbi1taW51c3RoaWNrIHBvcnRsZXQtdG9nZ2xlJz48L3NwYW4+XCIpO1xuICAgICAgICBcbiAgICBqUXVlcnkoIFwiLnBvcnRsZXQtdG9nZ2xlXCIgKS5vbiggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpY29uID0galF1ZXJ5KCB0aGlzICk7XG4gICAgICBpY29uLnRvZ2dsZUNsYXNzKCBcInVpLWljb24tbWludXN0aGljayB1aS1pY29uLXBsdXN0aGlja1wiICk7XG4gICAgICBpY29uLmNsb3Nlc3QoIFwiLnBvcnRsZXRcIiApLmZpbmQoIFwiLnBvcnRsZXQtY29udGVudFwiICkudG9nZ2xlKCk7XG4gICAgfSk7XG4gICAgKDxhbnk+alF1ZXJ5KCBcIi5jb2x1bW5cIiApKS5zb3J0YWJsZSh7XG4gICAgICBjb25uZWN0V2l0aDogXCIuY29sdW1uXCIsXG4gICAgICBoYW5kbGU6IFwiLnBvcnRsZXQtaGVhZGVyXCIsXG4gICAgICBjYW5jZWw6IFwiLnBvcnRsZXQtdG9nZ2xlXCIsXG4gICAgICBwbGFjZWhvbGRlcjogXCJwb3J0bGV0LXBsYWNlaG9sZGVyIHVpLWNvcm5lci1hbGxcIlxuICAgIH0pO1xuICB9XG5cbiAgbG9hZEZpbGUoY29uZmlnRmlsZSkge1xuICAgIHRoaXMuZGF0YSA9IHRoaXMuc2VydmljZS5nZXRTY3JlZW4oY29uZmlnRmlsZSk7XG4gICAgdGhpcy5kYXRhLnN1YnNjcmliZSh2YWwgPT4gY29uc29sZS5sb2codmFsKSk7XG4gIH1cbi8qXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50OicgKyBldmVudCk7XG4gICAgdmFyIGZpbGU6IEZpbGUgPSBldmVudC5zcmNFbGVtZW50LmZpbGVzWzBdO1xuICAgIHZhciB1cmw7XG4gICAgY29uc29sZS5sb2coJ2ZpbGU6JyArIGZpbGUpO1xuICAgIGNvbnNvbGUubG9nKCdmaWxlLm5hbWU6JyArIGZpbGUubmFtZSk7XG4gICAgY29uc29sZS5sb2coJ2ZpbGUudHlwZTonICsgZmlsZS50eXBlKTtcbiAgICBpZihmaWxlICE9IG51bGwpIHtcbiAgICAgIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9ICcuJyArIGVudmlyb25tZW50LmRpcmVjdG9yeSArICcvYXNzZXRzL2pzb24vZGF0YS5qc29uJztcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3VybDonICsgdXJsKTtcbiAgICBpZih1cmwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5kYXRhID0gdGhpcy5zZXJ2aWNlLmdldFNjcmVlbih1cmwpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZW52aWVtJyk7XG4gICAgdGhpcy5ub3RpZnkuZW1pdCh0aGlzLmRhdGEpO1xuICAgIGNvbnNvbGUubG9nKCdmaSBvbkNoYW5nZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkSlF1ZXJ5KCk7XG4gICAgfSwgMzAwKTtcbiAgfVxuKi9cbn1cbiJdfQ==