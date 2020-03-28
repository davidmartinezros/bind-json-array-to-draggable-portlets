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
        styles: ["body{font-family:Arial,Helvetica,sans-serif;min-width:320px}table{font-size:1em}.ui-draggable,.ui-droppable{background-position:top}.column{width:33%;float:left;padding-bottom:100px}.portlet{margin:0 1em 1em 0;padding:.3em}.portlet-header{padding:.2em .3em;margin-bottom:.5em;position:relative}.portlet-toggle{position:absolute;top:50%;right:0;margin-top:-8px}.portlet-content{padding:.4em}.portlet-placeholder{border:1px dotted #000;margin:0 1em 1em 0;height:50px}"]
    }),
    __metadata("design:paramtypes", [ReturnJsonArrayService])
], LoadPortletsComponent);
export { LoadPortletsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1wb3J0bGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2xvYWQvbG9hZC1wb3J0bGV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3RFLGlCQUFpQjtBQUVqQixlQUFlO0FBRWYsdUNBQXVDO0FBQ3ZDLHdFQUF3RTtBQUV4RSxnQkFBZ0I7QUFFaEIsWUFBWSxDQUFDO0FBRWIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyQixPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUN6QyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQVMxQyxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQU1oQyxnRUFBZ0U7SUFFaEUsWUFBb0IsT0FBK0I7UUFBL0IsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7SUFFbkQsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixJQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7WUFDcEMsSUFBRyxZQUFZLElBQUksQ0FBQyxFQUFFO2dCQUNwQixZQUFZLEdBQUcsQ0FBQyxDQUFDO2FBQ2xCO1lBQ0QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBQyxZQUFZLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxDQUFDLENBQUUsU0FBUyxDQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNILENBQUMsQ0FBRSxVQUFVLENBQUU7YUFDWixRQUFRLENBQUUsOERBQThELENBQUU7YUFDMUUsSUFBSSxDQUFFLGlCQUFpQixDQUFFO2FBQ3ZCLFFBQVEsQ0FBRSxnQ0FBZ0MsQ0FBRTthQUM1QyxPQUFPLENBQUUsaUVBQWlFLENBQUMsQ0FBQztRQUVqRixDQUFDLENBQUUsaUJBQWlCLENBQUUsQ0FBQyxFQUFFLENBQUUsT0FBTyxFQUFFO1lBQ2xDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBRSxJQUFJLENBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxDQUFFLHNDQUFzQyxDQUFFLENBQUM7WUFDM0QsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFVLENBQUUsQ0FBQyxJQUFJLENBQUUsa0JBQWtCLENBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztRQUNHLENBQUMsQ0FBRSxTQUFTLENBQUcsQ0FBQyxRQUFRLENBQUM7WUFDN0IsV0FBVyxFQUFFLFNBQVM7WUFDdEIsTUFBTSxFQUFFLGlCQUFpQjtZQUN6QixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLFdBQVcsRUFBRSxtQ0FBbUM7U0FDakQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFVO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQTBCRixDQUFBOztZQXZFOEIsc0JBQXNCOztBQUoxQztJQUFSLEtBQUssRUFBRTs4QkFBYSxNQUFNO3lEQUFDO0FBSmpCLHFCQUFxQjtJQVBqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLGdXQUE2QztRQUU3QyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztRQUNuQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztxQ0FTNkIsc0JBQXNCO0dBUnhDLHFCQUFxQixDQStFakM7U0EvRVkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJldHVybkpzb25BcnJheVNlcnZpY2UgfSBmcm9tICcuLi9yZXR1cm4tanNvbi1hcnJheS5zZXJ2aWNlJztcbmltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9kYXRhJztcblxuLypvcGNpbyBhbnRpZ2EgKi9cblxuLy8ndXNlIHN0cmljdCc7XG5cbi8vaW1wb3J0ICogYXMganF1ZXJ5UHJveHkgZnJvbSAnanF1ZXJ5J1xuLy9jb25zdCBqcXVlcnk6IEpRdWVyeVN0YXRpYyA9ICg8YW55PmpxdWVyeVByb3h5KS5kZWZhdWx0IHx8IGpxdWVyeVByb3h5XG5cbi8qIG9wY2lvIG5vdmEgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5yZXF1aXJlKCdqcXVlcnktdWknKTtcbnJlcXVpcmUoJ2pxdWVyeS11aS91aS93aWRnZXRzL3NvcnRhYmxlJyk7XG5yZXF1aXJlKCdqcXVlcnktdWkvdWkvZGlzYWJsZS1zZWxlY3Rpb24nKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxvYWQtcG9ydGxldHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZC1wb3J0bGV0cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWQtcG9ydGxldHMuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbUmV0dXJuSnNvbkFycmF5U2VydmljZV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTG9hZFBvcnRsZXRzQ29tcG9uZW50IHtcblxuICBkYXRhOiBPYnNlcnZhYmxlPERhdGE+O1xuXG4gIEBJbnB1dCgpIGNvbmZpZ0ZpbGU6IFN0cmluZztcblxuICAvL0BPdXRwdXQoKSBub3RpZnk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBSZXR1cm5Kc29uQXJyYXlTZXJ2aWNlKSB7XG4gICAgXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbmZpZ0ZpbGUpO1xuICAgIGlmKHRoaXMuY29uZmlnRmlsZSkge1xuICAgICAgdGhpcy5sb2FkRmlsZSh0aGlzLmNvbmZpZ0ZpbGUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZEpRdWVyeSgpO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH1cblxuICBsb2FkSlF1ZXJ5KCkge1xuICAgIHRoaXMuZGF0YS5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgIGxldCBjb2x1bW5zQ291bnQgPSB2YWwuY29sdW1uc0NvdW50O1xuICAgICAgaWYoY29sdW1uc0NvdW50IDw9IDApIHtcbiAgICAgICAgY29sdW1uc0NvdW50ID0gMTtcbiAgICAgIH1cbiAgICAgIGxldCB3aWR0aCA9ICgoMS9jb2x1bW5zQ291bnQpKjEwMCk7XG4gICAgICAkKCBcIi5jb2x1bW5cIiApLndpZHRoKHdpZHRoICsgXCIlXCIpO1xuICAgIH0pO1xuICAgICQoIFwiLnBvcnRsZXRcIiApXG4gICAgICAuYWRkQ2xhc3MoIFwidWktd2lkZ2V0IHVpLXdpZGdldC1jb250ZW50IHVpLWhlbHBlci1jbGVhcmZpeCB1aS1jb3JuZXItYWxsXCIgKVxuICAgICAgLmZpbmQoIFwiLnBvcnRsZXQtaGVhZGVyXCIgKVxuICAgICAgICAuYWRkQ2xhc3MoIFwidWktd2lkZ2V0LWhlYWRlciB1aS1jb3JuZXItYWxsXCIgKVxuICAgICAgICAucHJlcGVuZCggXCI8c3BhbiBjbGFzcz0ndWktaWNvbiB1aS1pY29uLW1pbnVzdGhpY2sgcG9ydGxldC10b2dnbGUnPjwvc3Bhbj5cIik7XG4gICAgICAgIFxuICAgICQoIFwiLnBvcnRsZXQtdG9nZ2xlXCIgKS5vbiggXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpY29uID0gJCggdGhpcyApO1xuICAgICAgaWNvbi50b2dnbGVDbGFzcyggXCJ1aS1pY29uLW1pbnVzdGhpY2sgdWktaWNvbi1wbHVzdGhpY2tcIiApO1xuICAgICAgaWNvbi5jbG9zZXN0KCBcIi5wb3J0bGV0XCIgKS5maW5kKCBcIi5wb3J0bGV0LWNvbnRlbnRcIiApLnRvZ2dsZSgpO1xuICAgIH0pO1xuICAgICg8YW55PiQoIFwiLmNvbHVtblwiICkpLnNvcnRhYmxlKHtcbiAgICAgIGNvbm5lY3RXaXRoOiBcIi5jb2x1bW5cIixcbiAgICAgIGhhbmRsZTogXCIucG9ydGxldC1oZWFkZXJcIixcbiAgICAgIGNhbmNlbDogXCIucG9ydGxldC10b2dnbGVcIixcbiAgICAgIHBsYWNlaG9sZGVyOiBcInBvcnRsZXQtcGxhY2Vob2xkZXIgdWktY29ybmVyLWFsbFwiXG4gICAgfSk7XG4gIH1cblxuICBsb2FkRmlsZShjb25maWdGaWxlKSB7XG4gICAgdGhpcy5kYXRhID0gdGhpcy5zZXJ2aWNlLmdldFNjcmVlbihjb25maWdGaWxlKTtcbiAgICB0aGlzLmRhdGEuc3Vic2NyaWJlKHZhbCA9PiBjb25zb2xlLmxvZyh2YWwpKTtcbiAgfVxuLypcbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQ6JyArIGV2ZW50KTtcbiAgICB2YXIgZmlsZTogRmlsZSA9IGV2ZW50LnNyY0VsZW1lbnQuZmlsZXNbMF07XG4gICAgdmFyIHVybDtcbiAgICBjb25zb2xlLmxvZygnZmlsZTonICsgZmlsZSk7XG4gICAgY29uc29sZS5sb2coJ2ZpbGUubmFtZTonICsgZmlsZS5uYW1lKTtcbiAgICBjb25zb2xlLmxvZygnZmlsZS50eXBlOicgKyBmaWxlLnR5cGUpO1xuICAgIGlmKGZpbGUgIT0gbnVsbCkge1xuICAgICAgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gJy4nICsgZW52aXJvbm1lbnQuZGlyZWN0b3J5ICsgJy9hc3NldHMvanNvbi9kYXRhLmpzb24nO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygndXJsOicgKyB1cmwpO1xuICAgIGlmKHVybCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLnNlcnZpY2UuZ2V0U2NyZWVuKHVybCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdlbnZpZW0nKTtcbiAgICB0aGlzLm5vdGlmeS5lbWl0KHRoaXMuZGF0YSk7XG4gICAgY29uc29sZS5sb2coJ2ZpIG9uQ2hhbmdlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRKUXVlcnkoKTtcbiAgICB9LCAzMDApO1xuICB9XG4qL1xufVxuIl19