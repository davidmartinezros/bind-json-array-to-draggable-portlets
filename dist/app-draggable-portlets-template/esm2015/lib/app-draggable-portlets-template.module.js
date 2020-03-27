import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { AppDraggablePortletsTemplateComponent } from './app-draggable-portlets-template.component';
import { PortletComponent } from './portlet/portlet.component';
import { PortletsGroupComponent } from './portlets/portlets-group.component';
import { LoadPortletsComponent } from './load/load-portlets.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReturnJsonArrayService } from './return-json-array.service';
let AppDraggablePortletsTemplateModule = class AppDraggablePortletsTemplateModule {
};
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
export { AppDraggablePortletsTemplateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWRyYWdnYWJsZS1wb3J0bGV0cy10ZW1wbGF0ZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hcHAtZHJhZ2dhYmxlLXBvcnRsZXRzLXRlbXBsYXRlLyIsInNvdXJjZXMiOlsibGliL2FwcC1kcmFnZ2FibGUtcG9ydGxldHMtdGVtcGxhdGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQXFCckUsSUFBYSxrQ0FBa0MsR0FBL0MsTUFBYSxrQ0FBa0M7Q0FBSSxDQUFBO0FBQXRDLGtDQUFrQztJQWpCOUMsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1oscUNBQXFDO1lBQ3JDLGdCQUFnQjtZQUNoQixzQkFBc0I7WUFDdEIscUJBQXFCO1NBQUc7UUFDMUIsT0FBTyxFQUFFO1lBQ1AsYUFBYTtZQUNiLGdCQUFnQjtTQUNqQjtRQUNELFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1FBQ25DLE9BQU8sRUFBRTtZQUNQLHFDQUFxQztZQUNyQyxnQkFBZ0I7WUFDaEIsc0JBQXNCO1lBQ3RCLHFCQUFxQjtTQUFDO0tBQ3pCLENBQUM7R0FDVyxrQ0FBa0MsQ0FBSTtTQUF0QyxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwRHJhZ2dhYmxlUG9ydGxldHNUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vYXBwLWRyYWdnYWJsZS1wb3J0bGV0cy10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9ydGxldENvbXBvbmVudCB9IGZyb20gJy4vcG9ydGxldC9wb3J0bGV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3J0bGV0c0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9wb3J0bGV0cy9wb3J0bGV0cy1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9hZFBvcnRsZXRzQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkL2xvYWQtcG9ydGxldHMuY29tcG9uZW50JztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSZXR1cm5Kc29uQXJyYXlTZXJ2aWNlIH0gZnJvbSAnLi9yZXR1cm4tanNvbi1hcnJheS5zZXJ2aWNlJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcERyYWdnYWJsZVBvcnRsZXRzVGVtcGxhdGVDb21wb25lbnQsXG4gICAgUG9ydGxldENvbXBvbmVudCxcbiAgICBQb3J0bGV0c0dyb3VwQ29tcG9uZW50LFxuICAgIExvYWRQb3J0bGV0c0NvbXBvbmVudCAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSBcbiAgXSxcbiAgcHJvdmlkZXJzOiBbUmV0dXJuSnNvbkFycmF5U2VydmljZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBBcHBEcmFnZ2FibGVQb3J0bGV0c1RlbXBsYXRlQ29tcG9uZW50LFxuICAgIFBvcnRsZXRDb21wb25lbnQsXG4gICAgUG9ydGxldHNHcm91cENvbXBvbmVudCxcbiAgICBMb2FkUG9ydGxldHNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcERyYWdnYWJsZVBvcnRsZXRzVGVtcGxhdGVNb2R1bGUgeyB9XG4iXX0=