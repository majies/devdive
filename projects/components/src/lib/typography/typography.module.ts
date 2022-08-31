import { NgModule } from "@angular/core";
import {TypographyComponent} from "./typography.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    TypographyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TypographyComponent
  ]
})
export class TypographyModule {}
