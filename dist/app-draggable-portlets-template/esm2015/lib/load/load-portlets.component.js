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
const $ = $_;
require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
//require('jquery-ui/ui/disable-selection');
/* opcio mes nova */
//declare var jQuery: any;
let LoadPortletsComponent = class LoadPortletsComponent {
    //@Output() notify: EventEmitter<any> = new EventEmitter<any>();
    constructor(service) {
        this.service = service;
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
export { LoadPortletsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1wb3J0bGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2xvYWQvbG9hZC1wb3J0bGV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3RFLGlCQUFpQjtBQUVqQixlQUFlO0FBRWYsdUNBQXVDO0FBQ3ZDLHdFQUF3RTtBQUV4RSxnQkFBZ0I7QUFFaEIsZUFBZTtBQUVmLE9BQU8sS0FBSyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTdCLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUViLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQixPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUN6Qyw0Q0FBNEM7QUFFNUMsb0JBQW9CO0FBRXBCLDBCQUEwQjtBQVMxQixJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQU1oQyxnRUFBZ0U7SUFFaEUsWUFBb0IsT0FBK0I7UUFBL0IsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7UUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxVQUFVLENBQUMseUVBQXlFLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsVUFBVSxDQUFDLHNGQUFzRixDQUFDLENBQUM7UUFDeEcsaUdBQWlHO0lBQ25HLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBRztRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNwQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLElBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQztZQUNwQyxJQUFHLFlBQVksSUFBSSxDQUFDLEVBQUU7Z0JBQ3BCLFlBQVksR0FBRyxDQUFDLENBQUM7YUFDbEI7WUFDRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFDLFlBQVksQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLENBQUMsQ0FBRSxTQUFTLENBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsQ0FBQyxDQUFFLFVBQVUsQ0FBRTthQUNaLFFBQVEsQ0FBRSw4REFBOEQsQ0FBRTthQUMxRSxJQUFJLENBQUUsaUJBQWlCLENBQUU7YUFDdkIsUUFBUSxDQUFFLGdDQUFnQyxDQUFFO2FBQzVDLE9BQU8sQ0FBRSxpRUFBaUUsQ0FBQyxDQUFDO1FBRWpGLENBQUMsQ0FBRSxpQkFBaUIsQ0FBRSxDQUFDLEVBQUUsQ0FBRSxPQUFPLEVBQUU7WUFDbEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFFLElBQUksQ0FBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUUsc0NBQXNDLENBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFFLFVBQVUsQ0FBRSxDQUFDLElBQUksQ0FBRSxrQkFBa0IsQ0FBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ0csQ0FBQyxDQUFFLFNBQVMsQ0FBRyxDQUFDLFFBQVEsQ0FBQztZQUM3QixXQUFXLEVBQUUsU0FBUztZQUN0QixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsV0FBVyxFQUFFLG1DQUFtQztTQUNqRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUSxDQUFDLFVBQVU7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBMEJGLENBQUE7O1lBcEY4QixzQkFBc0I7O0FBSjFDO0lBQVIsS0FBSyxFQUFFOzhCQUFhLE1BQU07eURBQUM7QUFKakIscUJBQXFCO0lBUGpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsZ1dBQTZDO1FBRTdDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQ25DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztLQUN0QyxDQUFDO3FDQVM2QixzQkFBc0I7R0FSeEMscUJBQXFCLENBNEZqQztTQTVGWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmV0dXJuSnNvbkFycmF5U2VydmljZSB9IGZyb20gJy4uL3JldHVybi1qc29uLWFycmF5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL2RhdGEnO1xuXG4vKm9wY2lvIGFudGlnYSAqL1xuXG4vLyd1c2Ugc3RyaWN0JztcblxuLy9pbXBvcnQgKiBhcyBqcXVlcnlQcm94eSBmcm9tICdqcXVlcnknXG4vL2NvbnN0IGpxdWVyeTogSlF1ZXJ5U3RhdGljID0gKDxhbnk+anF1ZXJ5UHJveHkpLmRlZmF1bHQgfHwganF1ZXJ5UHJveHlcblxuLyogb3BjaW8gbm92YSAqL1xuXG4vLyd1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICogYXMgJF8gZnJvbSAnanF1ZXJ5JztcblxuY29uc3QgJCA9ICRfO1xuXG5yZXF1aXJlKCdqcXVlcnktdWknKTtcbnJlcXVpcmUoJ2pxdWVyeS11aS91aS93aWRnZXRzL3NvcnRhYmxlJyk7XG4vL3JlcXVpcmUoJ2pxdWVyeS11aS91aS9kaXNhYmxlLXNlbGVjdGlvbicpO1xuXG4vKiBvcGNpbyBtZXMgbm92YSAqL1xuXG4vL2RlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9hZC1wb3J0bGV0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkLXBvcnRsZXRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZC1wb3J0bGV0cy5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtSZXR1cm5Kc29uQXJyYXlTZXJ2aWNlXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkUG9ydGxldHNDb21wb25lbnQge1xuXG4gIGRhdGE6IE9ic2VydmFibGU8RGF0YT47XG5cbiAgQElucHV0KCkgY29uZmlnRmlsZTogU3RyaW5nO1xuXG4gIC8vQE91dHB1dCgpIG5vdGlmeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFJldHVybkpzb25BcnJheVNlcnZpY2UpIHtcbiAgICB0aGlzLmxvYWRTY3JpcHQoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2pxdWVyeS8zLjQuMS9qcXVlcnkubWluLmpzJyk7XG4gICAgdGhpcy5sb2FkU2NyaXB0KCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9qcXVlcnl1aS8xLjEyLjEvanF1ZXJ5LXVpLm1pbi5qcycpO1xuICAgIHRoaXMubG9hZFNjcmlwdCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5LXNvcnRhYmxlLzAuOS4xMy9qcXVlcnktc29ydGFibGUtbWluLmpzJyk7XG4gICAgLy90aGlzLmxvYWRTY3JpcHQoJ25vZGVfbW9kdWxlcy9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlL2Fzc2V0cy9qcy9kaXNhYmxlLXNlbGVjdGlvbi5qcycpO1xuICB9XG5cbiAgbG9hZFNjcmlwdCh1cmwpIHtcbiAgICBjb25zb2xlLmxvZyhcInByZXBhcmluZyB0byBsb2FkLi4uXCIpO1xuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgbm9kZS5zcmMgPSB1cmw7XG4gICAgbm9kZS50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgICBub2RlLmFzeW5jID0gdHJ1ZTtcbiAgICBub2RlLmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChub2RlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnRmlsZSk7XG4gICAgaWYodGhpcy5jb25maWdGaWxlKSB7XG4gICAgICB0aGlzLmxvYWRGaWxlKHRoaXMuY29uZmlnRmlsZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkSlF1ZXJ5KCk7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRKUXVlcnkoKSB7XG4gICAgdGhpcy5kYXRhLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgbGV0IGNvbHVtbnNDb3VudCA9IHZhbC5jb2x1bW5zQ291bnQ7XG4gICAgICBpZihjb2x1bW5zQ291bnQgPD0gMCkge1xuICAgICAgICBjb2x1bW5zQ291bnQgPSAxO1xuICAgICAgfVxuICAgICAgbGV0IHdpZHRoID0gKCgxL2NvbHVtbnNDb3VudCkqMTAwKTtcbiAgICAgICQoIFwiLmNvbHVtblwiICkud2lkdGgod2lkdGggKyBcIiVcIik7XG4gICAgfSk7XG4gICAgJCggXCIucG9ydGxldFwiIClcbiAgICAgIC5hZGRDbGFzcyggXCJ1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktaGVscGVyLWNsZWFyZml4IHVpLWNvcm5lci1hbGxcIiApXG4gICAgICAuZmluZCggXCIucG9ydGxldC1oZWFkZXJcIiApXG4gICAgICAgIC5hZGRDbGFzcyggXCJ1aS13aWRnZXQtaGVhZGVyIHVpLWNvcm5lci1hbGxcIiApXG4gICAgICAgIC5wcmVwZW5kKCBcIjxzcGFuIGNsYXNzPSd1aS1pY29uIHVpLWljb24tbWludXN0aGljayBwb3J0bGV0LXRvZ2dsZSc+PC9zcGFuPlwiKTtcbiAgICAgICAgXG4gICAgJCggXCIucG9ydGxldC10b2dnbGVcIiApLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGljb24gPSAkKCB0aGlzICk7XG4gICAgICBpY29uLnRvZ2dsZUNsYXNzKCBcInVpLWljb24tbWludXN0aGljayB1aS1pY29uLXBsdXN0aGlja1wiICk7XG4gICAgICBpY29uLmNsb3Nlc3QoIFwiLnBvcnRsZXRcIiApLmZpbmQoIFwiLnBvcnRsZXQtY29udGVudFwiICkudG9nZ2xlKCk7XG4gICAgfSk7XG4gICAgKDxhbnk+JCggXCIuY29sdW1uXCIgKSkuc29ydGFibGUoe1xuICAgICAgY29ubmVjdFdpdGg6IFwiLmNvbHVtblwiLFxuICAgICAgaGFuZGxlOiBcIi5wb3J0bGV0LWhlYWRlclwiLFxuICAgICAgY2FuY2VsOiBcIi5wb3J0bGV0LXRvZ2dsZVwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwicG9ydGxldC1wbGFjZWhvbGRlciB1aS1jb3JuZXItYWxsXCJcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRGaWxlKGNvbmZpZ0ZpbGUpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnNlcnZpY2UuZ2V0U2NyZWVuKGNvbmZpZ0ZpbGUpO1xuICAgIHRoaXMuZGF0YS5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKHZhbCkpO1xuICB9XG4vKlxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdldmVudDonICsgZXZlbnQpO1xuICAgIHZhciBmaWxlOiBGaWxlID0gZXZlbnQuc3JjRWxlbWVudC5maWxlc1swXTtcbiAgICB2YXIgdXJsO1xuICAgIGNvbnNvbGUubG9nKCdmaWxlOicgKyBmaWxlKTtcbiAgICBjb25zb2xlLmxvZygnZmlsZS5uYW1lOicgKyBmaWxlLm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKCdmaWxlLnR5cGU6JyArIGZpbGUudHlwZSk7XG4gICAgaWYoZmlsZSAhPSBudWxsKSB7XG4gICAgICB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSAnLicgKyBlbnZpcm9ubWVudC5kaXJlY3RvcnkgKyAnL2Fzc2V0cy9qc29uL2RhdGEuanNvbic7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd1cmw6JyArIHVybCk7XG4gICAgaWYodXJsICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMuc2VydmljZS5nZXRTY3JlZW4odXJsKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2VudmllbScpO1xuICAgIHRoaXMubm90aWZ5LmVtaXQodGhpcy5kYXRhKTtcbiAgICBjb25zb2xlLmxvZygnZmkgb25DaGFuZ2UnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEpRdWVyeSgpO1xuICAgIH0sIDMwMCk7XG4gIH1cbiovXG59XG4iXX0=