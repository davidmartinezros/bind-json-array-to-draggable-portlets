import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
let PortletsGroupComponent = class PortletsGroupComponent {
    constructor() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", Observable)
], PortletsGroupComponent.prototype, "data", void 0);
PortletsGroupComponent = __decorate([
    Component({
        selector: 'app-portlets-group',
        template: "<div *ngFor=\"let column of (data | async)?.columns\" class=\"column\">\r\n  <div *ngFor=\"let portlet of column.portlets\">\r\n    <app-portlet [portlet]=\"portlet\"></app-portlet>\r\n  </div>\r\n</div>",
        encapsulation: ViewEncapsulation.None,
        styles: ["@import url(https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css);body{font-family:Arial,Helvetica,sans-serif;min-width:320px}table{font-size:1em}.ui-draggable,.ui-droppable{background-position:top}.column{width:33%;float:left;padding-bottom:100px}.portlet{margin:0 1em 1em 0;padding:.3em}.portlet-header{padding:.2em .3em;margin-bottom:.5em;position:relative}.portlet-toggle{position:absolute;top:50%;right:0;margin-top:-8px}.portlet-content{padding:.4em}.portlet-placeholder{border:1px dotted #000;margin:0 1em 1em 0;height:50px}"]
    }),
    __metadata("design:paramtypes", [])
], PortletsGroupComponent);
export { PortletsGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGxldHMtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYXBwLWRyYWdnYWJsZS1wb3J0bGV0cy10ZW1wbGF0ZS8iLCJzb3VyY2VzIjpbImxpYi9wb3J0bGV0cy9wb3J0bGV0cy1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFTbEMsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFJakM7SUFDQSxDQUFDO0NBRUYsQ0FBQTtBQUxVO0lBQVIsS0FBSyxFQUFFOzhCQUFPLFVBQVU7b0RBQU87QUFGckIsc0JBQXNCO0lBTmxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsdU5BQThDO1FBRTlDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztLQUN0QyxDQUFDOztHQUNXLHNCQUFzQixDQU9sQztTQVBZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL2RhdGEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcG9ydGxldHMtZ3JvdXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3J0bGV0cy1ncm91cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcG9ydGxldHMtZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3J0bGV0c0dyb3VwQ29tcG9uZW50IHtcclxuICBcclxuICBASW5wdXQoKSBkYXRhOiBPYnNlcnZhYmxlPERhdGE+O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==