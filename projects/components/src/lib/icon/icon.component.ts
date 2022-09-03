import {Component, Input, ViewChild, ViewContainerRef} from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {Icon} from "./icon.interface";
import {iconMapper} from "./icon.mapper";

@Component({
  selector: 'dd-icon',
  template: `<ng-container #iconContainer></ng-container>`,
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() icon!: Icon;

  @ViewChild('iconContainer', {read: ViewContainerRef})
  iconContainer?: ViewContainerRef;

  async getIcon() {
    return iconMapper[this.icon]();
  }

  async ngAfterViewInit() {
    if (!this.icon) {
      throw new Error('Icon is a required input')
    }

    const icon = await this.getIcon();
    const component = this.iconContainer?.createComponent(FaIconComponent);

    if(component) {
      component.instance.icon = icon
      component.instance.render();
    }
  }
}
