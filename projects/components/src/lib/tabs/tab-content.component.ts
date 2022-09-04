import {Component, Input, TemplateRef, ViewChild} from "@angular/core";
import { generateUniqueId } from '../_utils';

@Component({
  selector: 'dd-tab',
  template: `
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>`
  ,
})
export class TabContentComponent {
  id: string = generateUniqueId('tab');

  @Input() label?: string;

  @ViewChild('content')
  content!: TemplateRef<unknown>
}
