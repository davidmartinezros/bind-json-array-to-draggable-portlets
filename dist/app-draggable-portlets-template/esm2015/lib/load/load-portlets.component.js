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
const jQuery = jQuery_;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1wb3J0bGV0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2xvYWQvbG9hZC1wb3J0bGV0cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3RFLGlCQUFpQjtBQUVqQixlQUFlO0FBRWYsdUNBQXVDO0FBQ3ZDLHdFQUF3RTtBQUV4RSxnQkFBZ0I7QUFFaEIsZUFBZTtBQUVmLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBRWxDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUV2QixPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDckIsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFDekMsNENBQTRDO0FBRTVDLG9CQUFvQjtBQUVwQiwwQkFBMEI7QUFTMUIsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFNaEMsZ0VBQWdFO0lBRWhFLFlBQW9CLE9BQStCO1FBQS9CLFlBQU8sR0FBUCxPQUFPLENBQXdCO1FBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsbUVBQW1FLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsVUFBVSxDQUFDLHlFQUF5RSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzRkFBc0YsQ0FBQyxDQUFDO1FBQ3hHLGlHQUFpRztJQUNuRyxDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQUc7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDcEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxJQUFJ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SW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSZXR1cm5Kc29uQXJyYXlTZXJ2aWNlIH0gZnJvbSAnLi4vcmV0dXJuLWpzb24tYXJyYXkuc2VydmljZSc7XG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vZGF0YSc7XG5cbi8qb3BjaW8gYW50aWdhICovXG5cbi8vJ3VzZSBzdHJpY3QnO1xuXG4vL2ltcG9ydCAqIGFzIGpxdWVyeVByb3h5IGZyb20gJ2pxdWVyeSdcbi8vY29uc3QganF1ZXJ5OiBKUXVlcnlTdGF0aWMgPSAoPGFueT5qcXVlcnlQcm94eSkuZGVmYXVsdCB8fCBqcXVlcnlQcm94eVxuXG4vKiBvcGNpbyBub3ZhICovXG5cbi8vJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBqUXVlcnlfIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IGpRdWVyeSA9IGpRdWVyeV87XG5cbnJlcXVpcmUoJ2pxdWVyeS11aScpO1xucmVxdWlyZSgnanF1ZXJ5LXVpL3VpL3dpZGdldHMvc29ydGFibGUnKTtcbi8vcmVxdWlyZSgnanF1ZXJ5LXVpL3VpL2Rpc2FibGUtc2VsZWN0aW9uJyk7XG5cbi8qIG9wY2lvIG1lcyBub3ZhICovXG5cbi8vZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sb2FkLXBvcnRsZXRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWQtcG9ydGxldHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkLXBvcnRsZXRzLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1JldHVybkpzb25BcnJheVNlcnZpY2VdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExvYWRQb3J0bGV0c0NvbXBvbmVudCB7XG5cbiAgZGF0YTogT2JzZXJ2YWJsZTxEYXRhPjtcblxuICBASW5wdXQoKSBjb25maWdGaWxlOiBTdHJpbmc7XG5cbiAgLy9AT3V0cHV0KCkgbm90aWZ5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogUmV0dXJuSnNvbkFycmF5U2VydmljZSkge1xuICAgIHRoaXMubG9hZFNjcmlwdCgnaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzMuNC4xL2pxdWVyeS5taW4uanMnKTtcbiAgICB0aGlzLmxvYWRTY3JpcHQoJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2pxdWVyeXVpLzEuMTIuMS9qcXVlcnktdWkubWluLmpzJyk7XG4gICAgdGhpcy5sb2FkU2NyaXB0KCdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9qcXVlcnktc29ydGFibGUvMC45LjEzL2pxdWVyeS1zb3J0YWJsZS1taW4uanMnKTtcbiAgICAvL3RoaXMubG9hZFNjcmlwdCgnbm9kZV9tb2R1bGVzL2FwcC1kcmFnZ2FibGUtcG9ydGxldHMtdGVtcGxhdGUvYXNzZXRzL2pzL2Rpc2FibGUtc2VsZWN0aW9uLmpzJyk7XG4gIH1cblxuICBsb2FkU2NyaXB0KHVybCkge1xuICAgIGNvbnNvbGUubG9nKFwicHJlcGFyaW5nIHRvIGxvYWQuLi5cIik7XG4gICAgbGV0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBub2RlLnNyYyA9IHVybDtcbiAgICBub2RlLnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xuICAgIG5vZGUuYXN5bmMgPSB0cnVlO1xuICAgIG5vZGUuY2hhcnNldCA9IFwidXRmLThcIjtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG5vZGUpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jb25maWdGaWxlKTtcbiAgICBpZih0aGlzLmNvbmZpZ0ZpbGUpIHtcbiAgICAgIHRoaXMubG9hZEZpbGUodGhpcy5jb25maWdGaWxlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRKUXVlcnkoKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEpRdWVyeSgpIHtcbiAgICB0aGlzLmRhdGEuc3Vic2NyaWJlKHZhbCA9PiB7XG4gICAgICBsZXQgY29sdW1uc0NvdW50ID0gdmFsLmNvbHVtbnNDb3VudDtcbiAgICAgIGlmKGNvbHVtbnNDb3VudCA8PSAwKSB7XG4gICAgICAgIGNvbHVtbnNDb3VudCA9IDE7XG4gICAgICB9XG4gICAgICBsZXQgd2lkdGggPSAoKDEvY29sdW1uc0NvdW50KSoxMDApO1xuICAgICAgalF1ZXJ5KCBcIi5jb2x1bW5cIiApLndpZHRoKHdpZHRoICsgXCIlXCIpO1xuICAgIH0pO1xuICAgIGpRdWVyeSggXCIucG9ydGxldFwiIClcbiAgICAgIC5hZGRDbGFzcyggXCJ1aS13aWRnZXQgdWktd2lkZ2V0LWNvbnRlbnQgdWktaGVscGVyLWNsZWFyZml4IHVpLWNvcm5lci1hbGxcIiApXG4gICAgICAuZmluZCggXCIucG9ydGxldC1oZWFkZXJcIiApXG4gICAgICAgIC5hZGRDbGFzcyggXCJ1aS13aWRnZXQtaGVhZGVyIHVpLWNvcm5lci1hbGxcIiApXG4gICAgICAgIC5wcmVwZW5kKCBcIjxzcGFuIGNsYXNzPSd1aS1pY29uIHVpLWljb24tbWludXN0aGljayBwb3J0bGV0LXRvZ2dsZSc+PC9zcGFuPlwiKTtcbiAgICAgICAgXG4gICAgalF1ZXJ5KCBcIi5wb3J0bGV0LXRvZ2dsZVwiICkub24oIFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaWNvbiA9IGpRdWVyeSggdGhpcyApO1xuICAgICAgaWNvbi50b2dnbGVDbGFzcyggXCJ1aS1pY29uLW1pbnVzdGhpY2sgdWktaWNvbi1wbHVzdGhpY2tcIiApO1xuICAgICAgaWNvbi5jbG9zZXN0KCBcIi5wb3J0bGV0XCIgKS5maW5kKCBcIi5wb3J0bGV0LWNvbnRlbnRcIiApLnRvZ2dsZSgpO1xuICAgIH0pO1xuICAgICg8YW55PmpRdWVyeSggXCIuY29sdW1uXCIgKSkuc29ydGFibGUoe1xuICAgICAgY29ubmVjdFdpdGg6IFwiLmNvbHVtblwiLFxuICAgICAgaGFuZGxlOiBcIi5wb3J0bGV0LWhlYWRlclwiLFxuICAgICAgY2FuY2VsOiBcIi5wb3J0bGV0LXRvZ2dsZVwiLFxuICAgICAgcGxhY2Vob2xkZXI6IFwicG9ydGxldC1wbGFjZWhvbGRlciB1aS1jb3JuZXItYWxsXCJcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRGaWxlKGNvbmZpZ0ZpbGUpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnNlcnZpY2UuZ2V0U2NyZWVuKGNvbmZpZ0ZpbGUpO1xuICAgIHRoaXMuZGF0YS5zdWJzY3JpYmUodmFsID0+IGNvbnNvbGUubG9nKHZhbCkpO1xuICB9XG4vKlxuICBvbkNoYW5nZShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdldmVudDonICsgZXZlbnQpO1xuICAgIHZhciBmaWxlOiBGaWxlID0gZXZlbnQuc3JjRWxlbWVudC5maWxlc1swXTtcbiAgICB2YXIgdXJsO1xuICAgIGNvbnNvbGUubG9nKCdmaWxlOicgKyBmaWxlKTtcbiAgICBjb25zb2xlLmxvZygnZmlsZS5uYW1lOicgKyBmaWxlLm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKCdmaWxlLnR5cGU6JyArIGZpbGUudHlwZSk7XG4gICAgaWYoZmlsZSAhPSBudWxsKSB7XG4gICAgICB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSAnLicgKyBlbnZpcm9ubWVudC5kaXJlY3RvcnkgKyAnL2Fzc2V0cy9qc29uL2RhdGEuanNvbic7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd1cmw6JyArIHVybCk7XG4gICAgaWYodXJsICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZGF0YSA9IHRoaXMuc2VydmljZS5nZXRTY3JlZW4odXJsKTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2VudmllbScpO1xuICAgIHRoaXMubm90aWZ5LmVtaXQodGhpcy5kYXRhKTtcbiAgICBjb25zb2xlLmxvZygnZmkgb25DaGFuZ2UnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEpRdWVyeSgpO1xuICAgIH0sIDMwMCk7XG4gIH1cbiovXG59XG4iXX0=