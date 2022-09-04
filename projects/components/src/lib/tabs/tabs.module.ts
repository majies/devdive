import {NgModule} from "@angular/core";
import {TabGroupComponent} from "./tab-group.component";
import {CommonModule} from "@angular/common";
import {IconModule} from "../icon";
import {TabButtonDirective} from "./tab-button.directive";
import {TabContentComponent} from "./tab-content.component";

@NgModule({
  declarations: [
    TabGroupComponent,
    TabContentComponent,
    TabButtonDirective
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    TabGroupComponent,
    TabContentComponent,
  ]
})
export class TabsModule {}
