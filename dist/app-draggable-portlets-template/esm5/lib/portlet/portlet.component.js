import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
var PortletComponent = /** @class */ (function () {
    function PortletComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Observable)
    ], PortletComponent.prototype, "portlet", void 0);
    PortletComponent = __decorate([
        Component({
            selector: 'app-portlet',
            template: " <div *ngIf=\"portlet\" class=\"portlet\">\r\n  <div class=\"portlet-header\">{{ portlet.header }}</div>\r\n  <div class=\"portlet-content\">\r\n    {{ portlet.content }}\r\n    <!--iframe src=\"https://www.youtube.com/embed/QH2-TGUlwu4?autoplay=1\" width=\"100%\" height=\"100%\" frameborder=\"0\" allowfullscreen></iframe>\r\n    -->\r\n  </div>\r\n</div>",
            encapsulation: ViewEncapsulation.None,
            styles: ["@import url(https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css);body{font-family:Arial,Helvetica,sans-serif;min-width:320px}table{font-size:1em}.ui-draggable,.ui-droppable{background-position:top}.column{width:33%;float:left;padding-bottom:100px}.portlet{margin:0 1em 1em 0;padding:.3em}.portlet-header{padding:.2em .3em;margin-bottom:.5em;position:relative}.portlet-toggle{position:absolute;top:50%;right:0;margin-top:-8px}.portlet-content{padding:.4em}.portlet-placeholder{border:1px dotted #000;margin:0 1em 1em 0;height:50px}"]
        }),
        __metadata("design:paramtypes", [])
    ], PortletComponent);
    return PortletComponent;
}());
export { PortletComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGxldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL3BvcnRsZXQvcG9ydGxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFTbEM7SUFJRTtJQUNBLENBQUM7SUFIUTtRQUFSLEtBQUssRUFBRTtrQ0FBVSxVQUFVO3FEQUFVO0lBRjNCLGdCQUFnQjtRQU41QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixpWEFBdUM7WUFFdkMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O1NBQ3RDLENBQUM7O09BQ1csZ0JBQWdCLENBTzVCO0lBQUQsdUJBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBvcnRsZXQgfSBmcm9tICcuLi9wb3J0bGV0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBvcnRsZXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3J0bGV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wb3J0bGV0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9ydGxldENvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHBvcnRsZXQ6IE9ic2VydmFibGU8UG9ydGxldD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19