import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { AppDraggablePortletsTemplateComponent } from './app-draggable-portlets-template.component';
import { PortletComponent } from './portlet/portlet.component';
import { PortletsGroupComponent } from './portlets/portlets-group.component';
import { LoadPortletsComponent } from './load/load-portlets.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReturnJsonArrayService } from './return-json-array.service';
var AppDraggablePortletsTemplateModule = /** @class */ (function () {
    function AppDraggablePortletsTemplateModule() {
    }
    AppDraggablePortletsTemplateModule = __decorate([
        NgModule({
            declarations: [
                AppDraggablePortletsTemplateComponent,
                PortletComponent,
                PortletsGroupComponent,
                LoadPortletsComponent
            ],
            imports: [
                BrowserModule,
                HttpClientModule
            ],
            providers: [ReturnJsonArrayService],
            exports: [
                AppDraggablePortletsTemplateComponent,
                PortletComponent,
                PortletsGroupComponent,
                LoadPortletsComponent
            ]
        })
    ], AppDraggablePortletsTemplateModule);
    return AppDraggablePortletsTemplateModule;
}());
export { AppDraggablePortletsTemplateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWRyYWdnYWJsZS1wb3J0bGV0cy10ZW1wbGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FwcC1kcmFnZ2FibGUtcG9ydGxldHMtdGVtcGxhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQXFCckU7SUFBQTtJQUFrRCxDQUFDO0lBQXRDLGtDQUFrQztRQWpCOUMsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFO2dCQUNaLHFDQUFxQztnQkFDckMsZ0JBQWdCO2dCQUNoQixzQkFBc0I7Z0JBQ3RCLHFCQUFxQjthQUFHO1lBQzFCLE9BQU8sRUFBRTtnQkFDUCxhQUFhO2dCQUNiLGdCQUFnQjthQUNqQjtZQUNELFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ25DLE9BQU8sRUFBRTtnQkFDUCxxQ0FBcUM7Z0JBQ3JDLGdCQUFnQjtnQkFDaEIsc0JBQXNCO2dCQUN0QixxQkFBcUI7YUFBQztTQUN6QixDQUFDO09BQ1csa0NBQWtDLENBQUk7SUFBRCx5Q0FBQztDQUFBLEFBQW5ELElBQW1EO1NBQXRDLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBEcmFnZ2FibGVQb3J0bGV0c1RlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3J0bGV0Q29tcG9uZW50IH0gZnJvbSAnLi9wb3J0bGV0L3BvcnRsZXQuY29tcG9uZW50JztcbmltcG9ydCB7IFBvcnRsZXRzR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL3BvcnRsZXRzL3BvcnRsZXRzLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2FkUG9ydGxldHNDb21wb25lbnQgfSBmcm9tICcuL2xvYWQvbG9hZC1wb3J0bGV0cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJldHVybkpzb25BcnJheVNlcnZpY2UgfSBmcm9tICcuL3JldHVybi1qc29uLWFycmF5LnNlcnZpY2UnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwRHJhZ2dhYmxlUG9ydGxldHNUZW1wbGF0ZUNvbXBvbmVudCxcbiAgICBQb3J0bGV0Q29tcG9uZW50LFxuICAgIFBvcnRsZXRzR3JvdXBDb21wb25lbnQsXG4gICAgTG9hZFBvcnRsZXRzQ29tcG9uZW50ICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlIFxuICBdLFxuICBwcm92aWRlcnM6IFtSZXR1cm5Kc29uQXJyYXlTZXJ2aWNlXSxcbiAgZXhwb3J0czogW1xuICAgIEFwcERyYWdnYWJsZVBvcnRsZXRzVGVtcGxhdGVDb21wb25lbnQsXG4gICAgUG9ydGxldENvbXBvbmVudCxcbiAgICBQb3J0bGV0c0dyb3VwQ29tcG9uZW50LFxuICAgIExvYWRQb3J0bGV0c0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwRHJhZ2dhYmxlUG9ydGxldHNUZW1wbGF0ZU1vZHVsZSB7IH1cbiJdfQ==