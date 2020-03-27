import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
var PortletsGroupComponent = /** @class */ (function () {
    function PortletsGroupComponent() {
    }
    __decorate([
        Input(),
        __metadata("design:type", Observable)
    ], PortletsGroupComponent.prototype, "data", void 0);
    PortletsGroupComponent = __decorate([
        Component({
            selector: 'app-portlets-group',
            template: "<div *ngFor=\"let column of (data | async)?.columns\" class=\"column\">\r\n  <div *ngFor=\"let portlet of column.portlets\">\r\n    <app-portlet [portlet]=\"portlet\"></app-portlet>\r\n  </div>\r\n</div>",
            encapsulation: ViewEncapsulation.None,
            styles: ["body{font-family:Arial,Helvetica,sans-serif;min-width:320px}table{font-size:1em}.ui-draggable,.ui-droppable{background-position:top}.column{width:33%;float:left;padding-bottom:100px}.portlet{margin:0 1em 1em 0;padding:.3em}.portlet-header{padding:.2em .3em;margin-bottom:.5em;position:relative}.portlet-toggle{position:absolute;top:50%;right:0;margin-top:-8px}.portlet-content{padding:.4em}.portlet-placeholder{border:1px dotted #000;margin:0 1em 1em 0;height:50px}"]
        }),
        __metadata("design:paramtypes", [])
    ], PortletsGroupComponent);
    return PortletsGroupComponent;
}());
export { PortletsGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGxldHMtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXBwLWRyYWdnYWJsZS1wb3J0bGV0cy10ZW1wbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9wb3J0bGV0cy9wb3J0bGV0cy1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFTbEM7SUFJRTtJQUNBLENBQUM7SUFIUTtRQUFSLEtBQUssRUFBRTtrQ0FBTyxVQUFVO3dEQUFPO0lBRnJCLHNCQUFzQjtRQU5sQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLHVOQUE4QztZQUU5QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7U0FDdEMsQ0FBQzs7T0FDVyxzQkFBc0IsQ0FPbEM7SUFBRCw2QkFBQztDQUFBLEFBUEQsSUFPQztTQVBZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL2RhdGEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcG9ydGxldHMtZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3J0bGV0cy1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcG9ydGxldHMtZ3JvdXAuY29tcG9uZW50LmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvcnRsZXRzR3JvdXBDb21wb25lbnQge1xyXG4gIFxyXG4gIEBJbnB1dCgpIGRhdGE6IE9ic2VydmFibGU8RGF0YT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19