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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1wb3J0bGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2xvYWQvbG9hZC1wb3J0bGV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3RFLGlCQUFpQjtBQUVqQixlQUFlO0FBRWYsdUNBQXVDO0FBQ3ZDLHdFQUF3RTtBQUV4RSxnQkFBZ0I7QUFFaEIsWUFBWSxDQUFDO0FBRWIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQixPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUN6QyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQVMxQyxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQU1oQyxnRUFBZ0U7SUFFaEUsWUFBb0IsT0FBK0I7UUFBL0IsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7SUFFbkQsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDcEMsSUFBRyxZQUFZLElBQUksQ0FBQyxFQUFFO2dCQUNwQixZQUFZLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO1lBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBQyxZQUFZLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUUsU0FBUyxDQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNILENBQUMsQ0FBRSxVQUFVLENBQUU7YUFDWixRQUFRLENBQUUsOERBQThELENBQUU7YUFDMUUsSUFBSSxDQUFFLGlCQUFpQixDQUFFO2FBQ3ZCLFFBQVEsQ0FBRSxnQ0FBZ0MsQ0FBRTthQUM1QyxPQUFPLENBQUUsaUVBQWlFLENBQUMsQ0FBQztRQUVqRixDQUFDLENBQUUsaUJBQWlCLENBQUUsQ0FBQyxFQUFFLENBQUUsT0FBTyxFQUFFO1lBQ2xDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBRSxJQUFJLENBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFFLHNDQUFzQyxDQUFFLENBQUM7WUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFVLENBQUUsQ0FBQyxJQUFJLENBQUUsa0JBQWtCLENBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztRQUNHLENBQUMsQ0FBRSxTQUFTLENBQUcsQ0FBQyxRQUFRLENBQUM7WUFDN0IsV0FBVyxFQUFFLFNBQVM7WUFDdEIsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLFdBQVcsRUFBRSxtQ0FBbUM7U0FDakQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFVO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQTBCRixDQUFBOztZQXZFOEIsc0JBQXNCOztBQUoxQztJQUFSLEtBQUssRUFBRTs4QkFBYSxNQUFNO3lEQUFDO0FBSmpCLHFCQUFxQjtJQVBqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLGdXQUE2QztRQUU3QyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztRQUNuQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztxQ0FTNkIsc0JBQXNCO0dBUnhDLHFCQUFxQixDQStFakM7U0EvRVkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJldHVybkpzb25BcnJheVNlcnZpY2UgfSBmcm9tICcuLi9yZXR1cm4tanNvbi1hcnJheS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9kYXRhJztcblxuLypvcGNpbyBhbnRpZ2EgKi9cblxuLy8ndXNlIHN0cmljdCc7XG5cbi8vaW1wb3J0ICogYXMganF1ZXJ5UHJveHkgZnJvbSAnanF1ZXJ5J1xuLy9jb25zdCBqcXVlcnk6IEpRdWVyeVN0YXRpYyA9ICg8YW55PmpxdWVyeVByb3h5KS5kZWZhdWx0IHx8IGpxdWVyeVByb3h5XG5cbi8qIG9wY2lvIG5vdmEgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5yZXF1aXJlKCdqcXVlcnktdWknKTtcbnJlcXVpcmUoJ2pxdWVyeS11aS91aS93aWRnZXRzL3NvcnRhYmxlJyk7XG5yZXF1aXJlKCdqcXVlcnktdWkvdWkvZGlzYWJsZS1zZWxlY3Rpb24nKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvYWQtcG9ydGxldHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZC1wb3J0bGV0cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWQtcG9ydGxldHMuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtSZXR1cm5Kc29uQXJyYXlTZXJ2aWNlXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkUG9ydGxldHNDb21wb25lbnQge1xuXG4gIGRhdGE6IE9ic2VydmFibGU8RGF0YT47XG5cbiAgQElucHV0KCkgY29uZmlnRmlsZTogU3RyaW5nO1xuXG4gIC8vQE91dHB1dCgpIG5vdGlmeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFJldHVybkpzb25BcnJheVNlcnZpY2UpIHtcbiAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnRmlsZSk7XG4gICAgaWYodGhpcy5jb25maWdGaWxlKSB7XG4gICAgICB0aGlzLmxvYWRGaWxlKHRoaXMuY29uZmlnRmlsZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkSlF1ZXJ5KCk7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRKUXVlcnkoKSB7XG4gICAgdGhpcy5kYXRhLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgbGV0IGNvbHVtbnNDb3VudCA9IHZhbC5jb2x1bW5zQ291bnQ7XG4gICAgICBpZihjb2x1bW5zQ291bnQgPD0gMCkge1xuICAgICAgICBjb2x1bW5zQ291bnQgPSAxO1xuICAgICAgfVxuICAgICAgbGV0IHdpZHRoID0gKCgxL2NvbHVtbnNDb3VudCkqMTAwKTtcbiAgICAgICQoIFwiLmNvbHVtblwiICkud2lkdGgod2lkdGggKyBcIiVcIik7XG4gICAgfSk7XG4gICAgJCggXCIucG9ydGxldFwiIClcbiAgICAgIC5hZGRDbGFzcyggXCJ1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktaGVscGVyLWNsZWFyZml4IHVpLWNvcm5lci1hbGxcIiApXG4gICAgICAuZmluZCggXCIucG9ydGxldC1oZWFkZXJcIiApXG4gICAgICAgIC5hZGRDbGFzcyggXCJ1aS13aWRnZXQtaGVhZGVyIHVpLWNvcm5lci1hbGxcIiApXG4gICAgICAgIC5wcmVwZW5kKCBcIjxzcGFuIGNsYXNzPSd1aS1pY29uIHVpLWljb24tbWludXN0aGljayBwb3J0bGV0LXRvZ2dsZSc+PC9zcGFuPlwiKTtcbiAgICAgICAgXG4gICAgJCggXCIucG9ydGxldC10b2dnbGVcIiApLm9uKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGljb24gPSAkKCB0aGlzICk7XG4gICAgICBpY29uLnRvZ2dsZUNsYXNzKCBcInVpLWljb24tbWludXN0aGljayB1aS1pY29uLXBsdXN0aGlja1wiICk7XG4gICAgICBpY29uLmNsb3Nlc3QoIFwiLnBvcnRsZXRcIiApLmZpbmQoIFwiLnBvcnRsZXQtY29udGVudFwiICkudG9nZ2xlKCk7XG4gICAgfSk7XG4gICAgKDxhbnk+JCggXCIuY29sdW1uXCIgKSkuc29ydGFibGUoe1xuICAgICAgY29ubmVjdFdpdGg6IFwiLmNvbHVtblwiLFxuICAgICAgaGFuZGxlOiBcIi5wb3J0bGV0LWhlYWRlclwiLFxuICAgICAgY2FuY2VsOiBcIi5wb3J0bGV0LXRvZ2dsZVwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwicG9ydGxldC1wbGFjZWhvbGRlciB1aS1jb3JuZXItYWxsXCJcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRGaWxlKGNvbmZpZ0ZpbGUpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnNlcnZpY2UuZ2V0U2NyZWVuKGNvbmZpZ0ZpbGUpO1xuICAgIHRoaXMuZGF0YS5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKHZhbCkpO1xuICB9XG4vKlxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdldmVudDonICsgZXZlbnQpO1xuICAgIHZhciBmaWxlOiBGaWxlID0gZXZlbnQuc3JjRWxlbWVudC5maWxlc1swXTtcbiAgICB2YXIgdXJsO1xuICAgIGNvbnNvbGUubG9nKCdmaWxlOicgKyBmaWxlKTtcbiAgICBjb25zb2xlLmxvZygnZmlsZS5uYW1lOicgKyBmaWxlLm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKCdmaWxlLnR5cGU6JyArIGZpbGUudHlwZSk7XG4gICAgaWYoZmlsZSAhPSBudWxsKSB7XG4gICAgICB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSAnLicgKyBlbnZpcm9ubWVudC5kaXJlY3RvcnkgKyAnL2Fzc2V0cy9qc29uL2RhdGEuanNvbic7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd1cmw6JyArIHVybCk7XG4gICAgaWYodXJsICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMuc2VydmljZS5nZXRTY3JlZW4odXJsKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2VudmllbScpO1xuICAgIHRoaXMubm90aWZ5LmVtaXQodGhpcy5kYXRhKTtcbiAgICBjb25zb2xlLmxvZygnZmkgb25DaGFuZ2UnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEpRdWVyeSgpO1xuICAgIH0sIDMwMCk7XG4gIH1cbiovXG59XG4iXX0=