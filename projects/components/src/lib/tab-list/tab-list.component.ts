import {Component, HostBinding, Input, QueryList, ViewChildren} from '@angular/core';
import {FocusKeyManager} from "@angular/cdk/a11y";
import {TabButtonDirective} from "./tab-button.directive";

@Component({
  selector: 'dd-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})
export class TabListComponent {
  tabs = ['Read the article', 'Watch the video', 'View the resources'];

  focusManager!: FocusKeyManager<TabButtonDirective>;

  @ViewChildren(TabButtonDirective) tabButtons!: QueryList<TabButtonDirective>;

  @HostBinding('class.tab-list')
  protected readonly hbClassTabList = true;

  @Input() activeTabIndex: number = 0;

  selectTab(tabIndex: number) {
    this.activeTabIndex = tabIndex;
  }

  focusTab(tabIndex: number) {
    this.focusManager.setActiveItem(tabIndex)
  }

  handleKeyDown(event: KeyboardEvent, tabIndex: number) {
    switch (event.key) {
      case 'Enter':
      case 'Space':
        this.selectTab(tabIndex);
        break;
      default:
        this.focusManager.onKeydown(event);
    }
  }

  ngAfterViewInit() {
    this.focusManager = new FocusKeyManager(this.tabButtons)
    this.focusManager.withHorizontalOrientation('ltr');
  }
}
