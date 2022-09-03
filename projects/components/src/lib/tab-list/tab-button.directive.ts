import {Directive, ElementRef} from "@angular/core";

@Directive({
  selector: '[ddTabButton]'
})
export class TabButtonDirective {
  constructor(private elRef: ElementRef<HTMLButtonElement>) {
  }

  focus() {
    this.elRef.nativeElement.focus();
  }
}
