import {Component, ContentChildren, HostBinding, Input, QueryList, ViewChildren} from '@angular/core';
import {FocusKeyManager} from "@angular/cdk/a11y";
import {TabButtonDirective} from "./tab-button.directive";
import {TabContentComponent} from "./tab-content.component";

@Component({
  selector: 'dd-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent {
  focusManager!: FocusKeyManager<TabButtonDirective>;

  @ViewChildren(TabButtonDirective) tabButtons!: QueryList<TabButtonDirective>;
  @ContentChildren(TabContentComponent) tabs!: QueryList<TabContentComponent>;

  @HostBinding('class.tabs')
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
