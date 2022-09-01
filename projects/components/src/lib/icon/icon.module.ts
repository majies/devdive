import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {IconComponent} from "./icon.component";

@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule
  ],
  exports: [
    IconComponent
  ]
})
export class IconModule {
}
