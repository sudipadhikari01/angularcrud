import {GstGetComponent} from "./gst-get/gst-get.component";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {GstAddComponent} from "./gst-add/gst-add.component";
import {GstUpdateComponent} from "./gst-update/gst-update.component";

const routes: Routes = [
  {
    path: "business/create",
    component: GstAddComponent
  }, {
    path: "business/edit/:id",
    component: GstUpdateComponent
  }, {
    path: "business",
    component: GstGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
