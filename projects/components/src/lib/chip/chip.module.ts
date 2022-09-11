import {NgModule} from "@angular/core";
import {ChipComponent} from "./chip.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ChipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChipComponent
  ]
})
export class ChipModule {}
