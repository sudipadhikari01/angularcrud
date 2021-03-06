import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {GstAddComponent} from "./gst-add/gst-add.component";
import {GstGetComponent} from "./gst-get/gst-get.component";
import {GstUpdateComponent} from "./gst-update/gst-update.component";
import {SlimLoadingBarModule} from "ng2-slim-loading-bar";

import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent, GstAddComponent, GstGetComponent, GstUpdateComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, SlimLoadingBarModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
