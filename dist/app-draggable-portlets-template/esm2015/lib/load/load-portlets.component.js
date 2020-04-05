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
export { LoadPortletsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1wb3J0bGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2xvYWQvbG9hZC1wb3J0bGV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3RFLGlCQUFpQjtBQUVqQixlQUFlO0FBRWYsdUNBQXVDO0FBQ3ZDLHdFQUF3RTtBQUV4RSxnQkFBZ0I7QUFFaEIsZUFBZTtBQUVmLCtCQUErQjtBQUUvQixlQUFlO0FBRWYsdUJBQXVCO0FBQ3ZCLDJDQUEyQztBQUMzQyw0Q0FBNEM7QUFFNUMsb0JBQW9CO0FBRXBCLHFCQUFxQjtBQUVyQix1QkFBdUI7QUFDdkIsMkNBQTJDO0FBRTNDLGtCQUFrQjtBQUVsQixPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUU1QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDckIsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFFekMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBU2IsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFNaEMsZ0VBQWdFO0lBRWhFLFlBQW9CLE9BQStCO1FBQS9CLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBQ2pELHVGQUF1RjtRQUN2Riw2RkFBNkY7UUFDN0YsMEdBQTBHO1FBQzFHLGlHQUFpRztJQUNuRyxDQUFDO0lBQ0g7Ozs7Ozs7Ozs7TUFVRTtJQUNBLFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDcEMsSUFBRyxZQUFZLElBQUksQ0FBQyxFQUFFO2dCQUNwQixZQUFZLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO1lBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBQyxZQUFZLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxFQUFFLENBQUUsU0FBUyxDQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBRSxVQUFVLENBQUU7YUFDYixRQUFRLENBQUUsOERBQThELENBQUU7YUFDMUUsSUFBSSxDQUFFLGlCQUFpQixDQUFFO2FBQ3ZCLFFBQVEsQ0FBRSxnQ0FBZ0MsQ0FBRTthQUM1QyxPQUFPLENBQUUsaUVBQWlFLENBQUMsQ0FBQztRQUVqRixFQUFFLENBQUUsaUJBQWlCLENBQUUsQ0FBQyxFQUFFLENBQUUsT0FBTyxFQUFFO1lBQ25DLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBRSxJQUFJLENBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFFLHNDQUFzQyxDQUFFLENBQUM7WUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFVLENBQUUsQ0FBQyxJQUFJLENBQUUsa0JBQWtCLENBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztRQUNHLEVBQUUsQ0FBRSxTQUFTLENBQUcsQ0FBQyxRQUFRLENBQUM7WUFDOUIsV0FBVyxFQUFFLFNBQVM7WUFDdEIsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLFdBQVcsRUFBRSxtQ0FBbUM7U0FDakQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFVO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQTBCRixDQUFBOztZQXBGOEIsc0JBQXNCOztBQUoxQztJQUFSLEtBQUssRUFBRTs4QkFBYSxNQUFNO3lEQUFDO0FBSmpCLHFCQUFxQjtJQVBqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLGdXQUE2QztRQUU3QyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztRQUNuQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztxQ0FTNkIsc0JBQXNCO0dBUnhDLHFCQUFxQixDQTRGakM7U0E1RlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSZXR1cm5Kc29uQXJyYXlTZXJ2aWNlIH0gZnJvbSAnLi4vcmV0dXJuLWpzb24tYXJyYXkuc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9kYXRhJztcclxuXHJcbi8qb3BjaW8gYW50aWdhICovXHJcblxyXG4vLyd1c2Ugc3RyaWN0JztcclxuXHJcbi8vaW1wb3J0ICogYXMganF1ZXJ5UHJveHkgZnJvbSAnanF1ZXJ5J1xyXG4vL2NvbnN0IGpxdWVyeTogSlF1ZXJ5U3RhdGljID0gKDxhbnk+anF1ZXJ5UHJveHkpLmRlZmF1bHQgfHwganF1ZXJ5UHJveHlcclxuXHJcbi8qIG9wY2lvIG5vdmEgKi9cclxuXHJcbi8vJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy9pbXBvcnQgKiBhcyAkXyBmcm9tICdqcXVlcnknO1xyXG5cclxuLy9jb25zdCAkID0gJF87XHJcblxyXG4vL3JlcXVpcmUoJ2pxdWVyeS11aScpO1xyXG4vL3JlcXVpcmUoJ2pxdWVyeS11aS91aS93aWRnZXRzL3NvcnRhYmxlJyk7XHJcbi8vcmVxdWlyZSgnanF1ZXJ5LXVpL3VpL2Rpc2FibGUtc2VsZWN0aW9uJyk7XHJcblxyXG4vKiBvcGNpbyBtZXMgbm92YSAqL1xyXG5cclxuLy9kZWNsYXJlIHZhciAkOiBhbnk7XHJcblxyXG4vL3JlcXVpcmUoJ2pxdWVyeS11aScpO1xyXG4vL3JlcXVpcmUoJ2pxdWVyeS11aS91aS93aWRnZXRzL3NvcnRhYmxlJyk7XHJcblxyXG4vKiB1bHRpbWEgb3BjaW8gKi9cclxuXHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbnJlcXVpcmUoJ2pxdWVyeS11aScpO1xyXG5yZXF1aXJlKCdqcXVlcnktdWkvdWkvd2lkZ2V0cy9zb3J0YWJsZScpO1xyXG5cclxuY29uc3QgJF8gPSAkO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbG9hZC1wb3J0bGV0cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWQtcG9ydGxldHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvYWQtcG9ydGxldHMuY29tcG9uZW50LnNjc3MnXSxcclxuICBwcm92aWRlcnM6IFtSZXR1cm5Kc29uQXJyYXlTZXJ2aWNlXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2FkUG9ydGxldHNDb21wb25lbnQge1xyXG5cclxuICBkYXRhOiBPYnNlcnZhYmxlPERhdGE+O1xyXG5cclxuICBASW5wdXQoKSBjb25maWdGaWxlOiBTdHJpbmc7XHJcblxyXG4gIC8vQE91dHB1dCgpIG5vdGlmeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBSZXR1cm5Kc29uQXJyYXlTZXJ2aWNlKSB7XHJcbiAgICAvL3RoaXMubG9hZFNjcmlwdCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuNC4xL2pxdWVyeS5taW4uanMnKTtcclxuICAgIC8vdGhpcy5sb2FkU2NyaXB0KCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9qcXVlcnl1aS8xLjEyLjEvanF1ZXJ5LXVpLm1pbi5qcycpO1xyXG4gICAgLy90aGlzLmxvYWRTY3JpcHQoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2pxdWVyeS1zb3J0YWJsZS8wLjkuMTMvanF1ZXJ5LXNvcnRhYmxlLW1pbi5qcycpO1xyXG4gICAgLy90aGlzLmxvYWRTY3JpcHQoJ25vZGVfbW9kdWxlcy9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlL2Fzc2V0cy9qcy9kaXNhYmxlLXNlbGVjdGlvbi5qcycpO1xyXG4gIH1cclxuLypcclxuICBsb2FkU2NyaXB0KHVybCkge1xyXG4gICAgY29uc29sZS5sb2coXCJwcmVwYXJpbmcgdG8gbG9hZC4uLlwiKTtcclxuICAgIGxldCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICBub2RlLnNyYyA9IHVybDtcclxuICAgIG5vZGUudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XHJcbiAgICBub2RlLmFzeW5jID0gdHJ1ZTtcclxuICAgIG5vZGUuY2hhcnNldCA9IFwidXRmLThcIjtcclxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgfVxyXG4qL1xyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5jb25maWdGaWxlKTtcclxuICAgIGlmKHRoaXMuY29uZmlnRmlsZSkge1xyXG4gICAgICB0aGlzLmxvYWRGaWxlKHRoaXMuY29uZmlnRmlsZSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZEpRdWVyeSgpO1xyXG4gICAgICB9LCAzMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9hZEpRdWVyeSgpIHtcclxuICAgIHRoaXMuZGF0YS5zdWJzY3JpYmUodmFsID0+IHtcclxuICAgICAgbGV0IGNvbHVtbnNDb3VudCA9IHZhbC5jb2x1bW5zQ291bnQ7XHJcbiAgICAgIGlmKGNvbHVtbnNDb3VudCA8PSAwKSB7XHJcbiAgICAgICAgY29sdW1uc0NvdW50ID0gMTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgd2lkdGggPSAoKDEvY29sdW1uc0NvdW50KSoxMDApO1xyXG4gICAgICAkXyggXCIuY29sdW1uXCIgKS53aWR0aCh3aWR0aCArIFwiJVwiKTtcclxuICAgIH0pO1xyXG4gICAgJF8oIFwiLnBvcnRsZXRcIiApXHJcbiAgICAgIC5hZGRDbGFzcyggXCJ1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktaGVscGVyLWNsZWFyZml4IHVpLWNvcm5lci1hbGxcIiApXHJcbiAgICAgIC5maW5kKCBcIi5wb3J0bGV0LWhlYWRlclwiIClcclxuICAgICAgICAuYWRkQ2xhc3MoIFwidWktd2lkZ2V0LWhlYWRlciB1aS1jb3JuZXItYWxsXCIgKVxyXG4gICAgICAgIC5wcmVwZW5kKCBcIjxzcGFuIGNsYXNzPSd1aS1pY29uIHVpLWljb24tbWludXN0aGljayBwb3J0bGV0LXRvZ2dsZSc+PC9zcGFuPlwiKTtcclxuICAgICAgICBcclxuICAgICRfKCBcIi5wb3J0bGV0LXRvZ2dsZVwiICkub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZhciBpY29uID0gJF8oIHRoaXMgKTtcclxuICAgICAgaWNvbi50b2dnbGVDbGFzcyggXCJ1aS1pY29uLW1pbnVzdGhpY2sgdWktaWNvbi1wbHVzdGhpY2tcIiApO1xyXG4gICAgICBpY29uLmNsb3Nlc3QoIFwiLnBvcnRsZXRcIiApLmZpbmQoIFwiLnBvcnRsZXQtY29udGVudFwiICkudG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuICAgICg8YW55PiRfKCBcIi5jb2x1bW5cIiApKS5zb3J0YWJsZSh7XHJcbiAgICAgIGNvbm5lY3RXaXRoOiBcIi5jb2x1bW5cIixcclxuICAgICAgaGFuZGxlOiBcIi5wb3J0bGV0LWhlYWRlclwiLFxyXG4gICAgICBjYW5jZWw6IFwiLnBvcnRsZXQtdG9nZ2xlXCIsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiBcInBvcnRsZXQtcGxhY2Vob2xkZXIgdWktY29ybmVyLWFsbFwiXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRGaWxlKGNvbmZpZ0ZpbGUpIHtcclxuICAgIHRoaXMuZGF0YSA9IHRoaXMuc2VydmljZS5nZXRTY3JlZW4oY29uZmlnRmlsZSk7XHJcbiAgICB0aGlzLmRhdGEuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZyh2YWwpKTtcclxuICB9XHJcbi8qXHJcbiAgb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdldmVudDonICsgZXZlbnQpO1xyXG4gICAgdmFyIGZpbGU6IEZpbGUgPSBldmVudC5zcmNFbGVtZW50LmZpbGVzWzBdO1xyXG4gICAgdmFyIHVybDtcclxuICAgIGNvbnNvbGUubG9nKCdmaWxlOicgKyBmaWxlKTtcclxuICAgIGNvbnNvbGUubG9nKCdmaWxlLm5hbWU6JyArIGZpbGUubmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZygnZmlsZS50eXBlOicgKyBmaWxlLnR5cGUpO1xyXG4gICAgaWYoZmlsZSAhPSBudWxsKSB7XHJcbiAgICAgIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cmwgPSAnLicgKyBlbnZpcm9ubWVudC5kaXJlY3RvcnkgKyAnL2Fzc2V0cy9qc29uL2RhdGEuanNvbic7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygndXJsOicgKyB1cmwpO1xyXG4gICAgaWYodXJsICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5kYXRhID0gdGhpcy5zZXJ2aWNlLmdldFNjcmVlbih1cmwpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ2VudmllbScpO1xyXG4gICAgdGhpcy5ub3RpZnkuZW1pdCh0aGlzLmRhdGEpO1xyXG4gICAgY29uc29sZS5sb2coJ2ZpIG9uQ2hhbmdlJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5sb2FkSlF1ZXJ5KCk7XHJcbiAgICB9LCAzMDApO1xyXG4gIH1cclxuKi9cclxufVxyXG4iXX0=