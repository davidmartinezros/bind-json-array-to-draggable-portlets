import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ReturnJsonArrayService } from '../return-json-array.service';
//declare var $ :any;
//declare var jQuery: any;
//import * as $ from 'jquery';
'use strict';
//import * as $ from 'jquery';
import * as jqueryProxy from 'jquery';
const jquery = jqueryProxy.default || jqueryProxy;
require('jquery-ui');
require('jquery-ui/ui/widgets/sortable');
require('jquery-ui/ui/disable-selection');
let LoadPortletsComponent = class LoadPortletsComponent {
    //@Output() notify: EventEmitter<any> = new EventEmitter<any>();
    constructor(service) {
        this.service = service;
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
    }
    loadFile(configFile) {
        this.data = this.service.getScreen(/*'..'*/ /*+ environment.directory + */ configFile);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1wb3J0bGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2xvYWQvbG9hZC1wb3J0bGV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXdCLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUd0RSxxQkFBcUI7QUFFckIsMEJBQTBCO0FBRTFCLDhCQUE4QjtBQUU5QixZQUFZLENBQUM7QUFFYiw4QkFBOEI7QUFFOUIsT0FBTyxLQUFLLFdBQVcsTUFBTSxRQUFRLENBQUE7QUFDckMsTUFBTSxNQUFNLEdBQXVCLFdBQVksQ0FBQyxPQUFPLElBQUksV0FBVyxDQUFBO0FBRXRFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQixPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUN6QyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQVMxQyxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQU1oQyxnRUFBZ0U7SUFFaEUsWUFBb0IsT0FBK0I7UUFBL0IsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7SUFFbkQsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDcEMsSUFBRyxZQUFZLElBQUksQ0FBQyxFQUFFO2dCQUNwQixZQUFZLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO1lBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBQyxZQUFZLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUUsU0FBUyxDQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUNHLE1BQU0sQ0FBRSxTQUFTLENBQUcsQ0FBQyxRQUFRLENBQUM7WUFDbEMsV0FBVyxFQUFFLFNBQVM7WUFDdEIsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLFdBQVcsRUFBRSxtQ0FBbUM7U0FDakQsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFFLFVBQVUsQ0FBRTthQUNqQixRQUFRLENBQUUsOERBQThELENBQUU7YUFDMUUsSUFBSSxDQUFFLGlCQUFpQixDQUFFO2FBQ3ZCLFFBQVEsQ0FBRSxnQ0FBZ0MsQ0FBRTthQUM1QyxPQUFPLENBQUUsaUVBQWlFLENBQUMsQ0FBQztRQUVqRixNQUFNLENBQUUsaUJBQWlCLENBQUUsQ0FBQyxFQUFFLENBQUUsT0FBTyxFQUFFO1lBQ3ZDLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBRSxJQUFJLENBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFFLHNDQUFzQyxDQUFFLENBQUM7WUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFVLENBQUUsQ0FBQyxJQUFJLENBQUUsa0JBQWtCLENBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsVUFBVTtRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQSxVQUFVLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBMEJGLENBQUE7O1lBeEU4QixzQkFBc0I7O0FBSjFDO0lBQVIsS0FBSyxFQUFFOzhCQUFhLE1BQU07eURBQUM7QUFKakIscUJBQXFCO0lBUGpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsZ1dBQTZDO1FBRTdDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQ25DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztLQUN0QyxDQUFDO3FDQVM2QixzQkFBc0I7R0FSeEMscUJBQXFCLENBZ0ZqQztTQWhGWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJldHVybkpzb25BcnJheVNlcnZpY2UgfSBmcm9tICcuLi9yZXR1cm4tanNvbi1hcnJheS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9kYXRhJztcblxuLy9kZWNsYXJlIHZhciAkIDphbnk7XG5cbi8vZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XG5cbi8vaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xuXG5pbXBvcnQgKiBhcyBqcXVlcnlQcm94eSBmcm9tICdqcXVlcnknXG5jb25zdCBqcXVlcnk6IEpRdWVyeVN0YXRpYyA9ICg8YW55PmpxdWVyeVByb3h5KS5kZWZhdWx0IHx8IGpxdWVyeVByb3h5XG5cbnJlcXVpcmUoJ2pxdWVyeS11aScpO1xucmVxdWlyZSgnanF1ZXJ5LXVpL3VpL3dpZGdldHMvc29ydGFibGUnKTtcbnJlcXVpcmUoJ2pxdWVyeS11aS91aS9kaXNhYmxlLXNlbGVjdGlvbicpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9hZC1wb3J0bGV0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkLXBvcnRsZXRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9hZC1wb3J0bGV0cy5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW1JldHVybkpzb25BcnJheVNlcnZpY2VdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExvYWRQb3J0bGV0c0NvbXBvbmVudCB7XG5cbiAgZGF0YTogT2JzZXJ2YWJsZTxEYXRhPjtcblxuICBASW5wdXQoKSBjb25maWdGaWxlOiBTdHJpbmc7XG5cbiAgLy9AT3V0cHV0KCkgbm90aWZ5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogUmV0dXJuSnNvbkFycmF5U2VydmljZSkge1xuICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jb25maWdGaWxlKTtcbiAgICBpZih0aGlzLmNvbmZpZ0ZpbGUpIHtcbiAgICAgIHRoaXMubG9hZEZpbGUodGhpcy5jb25maWdGaWxlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRKUXVlcnkoKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEpRdWVyeSgpIHtcbiAgICB0aGlzLmRhdGEuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICBsZXQgY29sdW1uc0NvdW50ID0gdmFsLmNvbHVtbnNDb3VudDtcbiAgICAgIGlmKGNvbHVtbnNDb3VudCA8PSAwKSB7XG4gICAgICAgIGNvbHVtbnNDb3VudCA9IDE7XG4gICAgICB9XG4gICAgICBsZXQgd2lkdGggPSAoKDEvY29sdW1uc0NvdW50KSoxMDApO1xuICAgICAganF1ZXJ5KCBcIi5jb2x1bW5cIiApLndpZHRoKHdpZHRoICsgXCIlXCIpO1xuICAgIH0pO1xuICAgICg8YW55PmpxdWVyeSggXCIuY29sdW1uXCIgKSkuc29ydGFibGUoe1xuICAgICAgY29ubmVjdFdpdGg6IFwiLmNvbHVtblwiLFxuICAgICAgaGFuZGxlOiBcIi5wb3J0bGV0LWhlYWRlclwiLFxuICAgICAgY2FuY2VsOiBcIi5wb3J0bGV0LXRvZ2dsZVwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwicG9ydGxldC1wbGFjZWhvbGRlciB1aS1jb3JuZXItYWxsXCJcbiAgICB9KTtcbiBcbiAgICBqcXVlcnkoIFwiLnBvcnRsZXRcIiApXG4gICAgICAuYWRkQ2xhc3MoIFwidWktd2lkZ2V0IHVpLXdpZGdldC1jb250ZW50IHVpLWhlbHBlci1jbGVhcmZpeCB1aS1jb3JuZXItYWxsXCIgKVxuICAgICAgLmZpbmQoIFwiLnBvcnRsZXQtaGVhZGVyXCIgKVxuICAgICAgICAuYWRkQ2xhc3MoIFwidWktd2lkZ2V0LWhlYWRlciB1aS1jb3JuZXItYWxsXCIgKVxuICAgICAgICAucHJlcGVuZCggXCI8c3BhbiBjbGFzcz0ndWktaWNvbiB1aS1pY29uLW1pbnVzdGhpY2sgcG9ydGxldC10b2dnbGUnPjwvc3Bhbj5cIik7XG4gICAgICAgIFxuICAgIGpxdWVyeSggXCIucG9ydGxldC10b2dnbGVcIiApLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGljb24gPSBqcXVlcnkoIHRoaXMgKTtcbiAgICAgIGljb24udG9nZ2xlQ2xhc3MoIFwidWktaWNvbi1taW51c3RoaWNrIHVpLWljb24tcGx1c3RoaWNrXCIgKTtcbiAgICAgIGljb24uY2xvc2VzdCggXCIucG9ydGxldFwiICkuZmluZCggXCIucG9ydGxldC1jb250ZW50XCIgKS50b2dnbGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRGaWxlKGNvbmZpZ0ZpbGUpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnNlcnZpY2UuZ2V0U2NyZWVuKC8qJy4uJyovIC8qKyBlbnZpcm9ubWVudC5kaXJlY3RvcnkgKyAqL2NvbmZpZ0ZpbGUpO1xuICAgIHRoaXMuZGF0YS5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKHZhbCkpO1xuICB9XG4vKlxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdldmVudDonICsgZXZlbnQpO1xuICAgIHZhciBmaWxlOiBGaWxlID0gZXZlbnQuc3JjRWxlbWVudC5maWxlc1swXTtcbiAgICB2YXIgdXJsO1xuICAgIGNvbnNvbGUubG9nKCdmaWxlOicgKyBmaWxlKTtcbiAgICBjb25zb2xlLmxvZygnZmlsZS5uYW1lOicgKyBmaWxlLm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKCdmaWxlLnR5cGU6JyArIGZpbGUudHlwZSk7XG4gICAgaWYoZmlsZSAhPSBudWxsKSB7XG4gICAgICB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSAnLicgKyBlbnZpcm9ubWVudC5kaXJlY3RvcnkgKyAnL2Fzc2V0cy9qc29uL2RhdGEuanNvbic7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd1cmw6JyArIHVybCk7XG4gICAgaWYodXJsICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMuc2VydmljZS5nZXRTY3JlZW4odXJsKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2VudmllbScpO1xuICAgIHRoaXMubm90aWZ5LmVtaXQodGhpcy5kYXRhKTtcbiAgICBjb25zb2xlLmxvZygnZmkgb25DaGFuZ2UnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEpRdWVyeSgpO1xuICAgIH0sIDMwMCk7XG4gIH1cbiovXG59XG4iXX0=