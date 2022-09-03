import {NgModule} from "@angular/core";
import {TabListComponent} from "./tab-list.component";
import {CommonModule} from "@angular/common";
import {IconModule} from "../icon";
import {TabButtonDirective} from "./tab-button.directive";

@NgModule({
  declarations: [
    TabListComponent,
    TabButtonDirective
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    TabListComponent
  ]
})
export class TabListModule {}
