import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReturnJsonArrayService } from './return-json-array.service';
import { HttpClientModule } from '@angular/common/http';
import { PortletsGroupComponent } from './portlets/portlets-group.component';
import { LoadPortletsComponent } from './load/load-portlets.component';
import { PortletComponent } from './portlet/portlet.component';

@NgModule({
  declarations: [
    AppComponent,
    PortletsGroupComponent,
    PortletComponent,
    LoadPortletsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ReturnJsonArrayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
