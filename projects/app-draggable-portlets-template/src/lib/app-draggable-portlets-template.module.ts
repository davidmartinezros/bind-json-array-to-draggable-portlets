import { NgModule } from '@angular/core';
import { AppDraggablePortletsTemplateComponent } from './app-draggable-portlets-template.component';
import { PortletComponent } from './portlet/portlet.component';
import { PortletsGroupComponent } from './portlets/portlets-group.component';
import { LoadPortletsComponent } from './load/load-portlets.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReturnJsonArrayService } from './return-json-array.service';



@NgModule({
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
  exports: [AppDraggablePortletsTemplateComponent]
})
export class AppDraggablePortletsTemplateModule { }
