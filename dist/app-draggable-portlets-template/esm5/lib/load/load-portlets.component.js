import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ReturnJsonArrayService } from '../return-json-array.service';
/*opcio antiga */
//'use strict';
//import * as jqueryProxy from 'jquery'
//const jquery: JQueryStatic = (<any>jqueryProxy).default || jqueryProxy
/* opcio nova */
//'use strict';
import * as $_ from 'jquery';
var $ = $_;
require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
//require('jquery-ui/ui/disable-selection');
/* opcio mes nova */
//declare var jQuery: any;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1wb3J0bGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2xvYWQvbG9hZC1wb3J0bGV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3RFLGlCQUFpQjtBQUVqQixlQUFlO0FBRWYsdUNBQXVDO0FBQ3ZDLHdFQUF3RTtBQUV4RSxnQkFBZ0I7QUFFaEIsZUFBZTtBQUVmLE9BQU8sS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTdCLElBQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUViLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQixPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUN6Qyw0Q0FBNEM7QUFFNUMsb0JBQW9CO0FBRXBCLDBCQUEwQjtBQVMxQjtJQU1FLGdFQUFnRTtJQUVoRSwrQkFBb0IsT0FBK0I7UUFBL0IsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFDakQsdUZBQXVGO1FBQ3ZGLDZGQUE2RjtRQUM3RiwwR0FBMEc7UUFDMUcsaUdBQWlHO0lBQ25HLENBQUM7SUFDSDs7Ozs7Ozs7OztNQVVFO0lBQ0Esd0NBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsSUFBRyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9CLFVBQVUsQ0FBQztnQkFDVCxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7SUFDSCxDQUFDO0lBRUQsMENBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNyQixJQUFJLFlBQVksR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ3BDLElBQUcsWUFBWSxJQUFJLENBQUMsRUFBRTtnQkFDcEIsWUFBWSxHQUFHLENBQUMsQ0FBQzthQUNsQjtZQUNELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsWUFBWSxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFFLFNBQVMsQ0FBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUUsVUFBVSxDQUFFO2FBQ1osUUFBUSxDQUFFLDhEQUE4RCxDQUFFO2FBQzFFLElBQUksQ0FBRSxpQkFBaUIsQ0FBRTthQUN2QixRQUFRLENBQUUsZ0NBQWdDLENBQUU7YUFDNUMsT0FBTyxDQUFFLGlFQUFpRSxDQUFDLENBQUM7UUFFakYsQ0FBQyxDQUFFLGlCQUFpQixDQUFFLENBQUMsRUFBRSxDQUFFLE9BQU8sRUFBRTtZQUNsQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUUsSUFBSSxDQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBRSxzQ0FBc0MsQ0FBRSxDQUFDO1lBQzNELElBQUksQ0FBQyxPQUFPLENBQUUsVUFBVSxDQUFFLENBQUMsSUFBSSxDQUFFLGtCQUFrQixDQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7UUFDRyxDQUFDLENBQUUsU0FBUyxDQUFHLENBQUMsUUFBUSxDQUFDO1lBQzdCLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixXQUFXLEVBQUUsbUNBQW1DO1NBQ2pELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx3Q0FBUSxHQUFSLFVBQVMsVUFBVTtRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7O2dCQTFENEIsc0JBQXNCOztJQUoxQztRQUFSLEtBQUssRUFBRTtrQ0FBYSxNQUFNOzZEQUFDO0lBSmpCLHFCQUFxQjtRQVBqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLGdXQUE2QztZQUU3QyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7U0FDdEMsQ0FBQzt5Q0FTNkIsc0JBQXNCO09BUnhDLHFCQUFxQixDQTRGakM7SUFBRCw0QkFBQztDQUFBLEFBNUZELElBNEZDO1NBNUZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSZXR1cm5Kc29uQXJyYXlTZXJ2aWNlIH0gZnJvbSAnLi4vcmV0dXJuLWpzb24tYXJyYXkuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vZGF0YSc7XG5cbi8qb3BjaW8gYW50aWdhICovXG5cbi8vJ3VzZSBzdHJpY3QnO1xuXG4vL2ltcG9ydCAqIGFzIGpxdWVyeVByb3h5IGZyb20gJ2pxdWVyeSdcbi8vY29uc3QganF1ZXJ5OiBKUXVlcnlTdGF0aWMgPSAoPGFueT5qcXVlcnlQcm94eSkuZGVmYXVsdCB8fCBqcXVlcnlQcm94eVxuXG4vKiBvcGNpbyBub3ZhICovXG5cbi8vJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyAkXyBmcm9tICdqcXVlcnknO1xuXG5jb25zdCAkID0gJF87XG5cbnJlcXVpcmUoJ2pxdWVyeS11aScpO1xucmVxdWlyZSgnanF1ZXJ5LXVpL3VpL3dpZGdldHMvc29ydGFibGUnKTtcbi8vcmVxdWlyZSgnanF1ZXJ5LXVpL3VpL2Rpc2FibGUtc2VsZWN0aW9uJyk7XG5cbi8qIG9wY2lvIG1lcyBub3ZhICovXG5cbi8vZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2FkLXBvcnRsZXRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWQtcG9ydGxldHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkLXBvcnRsZXRzLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1JldHVybkpzb25BcnJheVNlcnZpY2VdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExvYWRQb3J0bGV0c0NvbXBvbmVudCB7XG5cbiAgZGF0YTogT2JzZXJ2YWJsZTxEYXRhPjtcblxuICBASW5wdXQoKSBjb25maWdGaWxlOiBTdHJpbmc7XG5cbiAgLy9AT3V0cHV0KCkgbm90aWZ5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogUmV0dXJuSnNvbkFycmF5U2VydmljZSkge1xuICAgIC8vdGhpcy5sb2FkU2NyaXB0KCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9qcXVlcnkvMy40LjEvanF1ZXJ5Lm1pbi5qcycpO1xuICAgIC8vdGhpcy5sb2FkU2NyaXB0KCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9qcXVlcnl1aS8xLjEyLjEvanF1ZXJ5LXVpLm1pbi5qcycpO1xuICAgIC8vdGhpcy5sb2FkU2NyaXB0KCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9qcXVlcnktc29ydGFibGUvMC45LjEzL2pxdWVyeS1zb3J0YWJsZS1taW4uanMnKTtcbiAgICAvL3RoaXMubG9hZFNjcmlwdCgnbm9kZV9tb2R1bGVzL2FwcC1kcmFnZ2FibGUtcG9ydGxldHMtdGVtcGxhdGUvYXNzZXRzL2pzL2Rpc2FibGUtc2VsZWN0aW9uLmpzJyk7XG4gIH1cbi8qXG4gIGxvYWRTY3JpcHQodXJsKSB7XG4gICAgY29uc29sZS5sb2coXCJwcmVwYXJpbmcgdG8gbG9hZC4uLlwiKTtcbiAgICBsZXQgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIG5vZGUuc3JjID0gdXJsO1xuICAgIG5vZGUudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgbm9kZS5hc3luYyA9IHRydWU7XG4gICAgbm9kZS5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIH1cbiovXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnRmlsZSk7XG4gICAgaWYodGhpcy5jb25maWdGaWxlKSB7XG4gICAgICB0aGlzLmxvYWRGaWxlKHRoaXMuY29uZmlnRmlsZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkSlF1ZXJ5KCk7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRKUXVlcnkoKSB7XG4gICAgdGhpcy5kYXRhLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgbGV0IGNvbHVtbnNDb3VudCA9IHZhbC5jb2x1bW5zQ291bnQ7XG4gICAgICBpZihjb2x1bW5zQ291bnQgPD0gMCkge1xuICAgICAgICBjb2x1bW5zQ291bnQgPSAxO1xuICAgICAgfVxuICAgICAgbGV0IHdpZHRoID0gKCgxL2NvbHVtbnNDb3VudCkqMTAwKTtcbiAgICAgICQoIFwiLmNvbHVtblwiICkud2lkdGgod2lkdGggKyBcIiVcIik7XG4gICAgfSk7XG4gICAgJCggXCIucG9ydGxldFwiIClcbiAgICAgIC5hZGRDbGFzcyggXCJ1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktaGVscGVyLWNsZWFyZml4IHVpLWNvcm5lci1hbGxcIiApXG4gICAgICAuZmluZCggXCIucG9ydGxldC1oZWFkZXJcIiApXG4gICAgICAgIC5hZGRDbGFzcyggXCJ1aS13aWRnZXQtaGVhZGVyIHVpLWNvcm5lci1hbGxcIiApXG4gICAgICAgIC5wcmVwZW5kKCBcIjxzcGFuIGNsYXNzPSd1aS1pY29uIHVpLWljb24tbWludXN0aGljayBwb3J0bGV0LXRvZ2dsZSc+PC9zcGFuPlwiKTtcbiAgICAgICAgXG4gICAgJCggXCIucG9ydGxldC10b2dnbGVcIiApLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGljb24gPSAkKCB0aGlzICk7XG4gICAgICBpY29uLnRvZ2dsZUNsYXNzKCBcInVpLWljb24tbWludXN0aGljayB1aS1pY29uLXBsdXN0aGlja1wiICk7XG4gICAgICBpY29uLmNsb3Nlc3QoIFwiLnBvcnRsZXRcIiApLmZpbmQoIFwiLnBvcnRsZXQtY29udGVudFwiICkudG9nZ2xlKCk7XG4gICAgfSk7XG4gICAgKDxhbnk+JCggXCIuY29sdW1uXCIgKSkuc29ydGFibGUoe1xuICAgICAgY29ubmVjdFdpdGg6IFwiLmNvbHVtblwiLFxuICAgICAgaGFuZGxlOiBcIi5wb3J0bGV0LWhlYWRlclwiLFxuICAgICAgY2FuY2VsOiBcIi5wb3J0bGV0LXRvZ2dsZVwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwicG9ydGxldC1wbGFjZWhvbGRlciB1aS1jb3JuZXItYWxsXCJcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRGaWxlKGNvbmZpZ0ZpbGUpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnNlcnZpY2UuZ2V0U2NyZWVuKGNvbmZpZ0ZpbGUpO1xuICAgIHRoaXMuZGF0YS5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKHZhbCkpO1xuICB9XG4vKlxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdldmVudDonICsgZXZlbnQpO1xuICAgIHZhciBmaWxlOiBGaWxlID0gZXZlbnQuc3JjRWxlbWVudC5maWxlc1swXTtcbiAgICB2YXIgdXJsO1xuICAgIGNvbnNvbGUubG9nKCdmaWxlOicgKyBmaWxlKTtcbiAgICBjb25zb2xlLmxvZygnZmlsZS5uYW1lOicgKyBmaWxlLm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKCdmaWxlLnR5cGU6JyArIGZpbGUudHlwZSk7XG4gICAgaWYoZmlsZSAhPSBudWxsKSB7XG4gICAgICB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSAnLicgKyBlbnZpcm9ubWVudC5kaXJlY3RvcnkgKyAnL2Fzc2V0cy9qc29uL2RhdGEuanNvbic7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd1cmw6JyArIHVybCk7XG4gICAgaWYodXJsICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMuc2VydmljZS5nZXRTY3JlZW4odXJsKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2VudmllbScpO1xuICAgIHRoaXMubm90aWZ5LmVtaXQodGhpcy5kYXRhKTtcbiAgICBjb25zb2xlLmxvZygnZmkgb25DaGFuZ2UnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEpRdWVyeSgpO1xuICAgIH0sIDMwMCk7XG4gIH1cbiovXG59XG4iXX0=