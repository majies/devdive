import {Component, ContentChildren, Input, QueryList, ViewChild} from '@angular/core';
import {CdkPortal} from '@angular/cdk/portal';

// testing tabs using portals -
@Component({
  selector: 'tab-with-portal',
  template: `
    <ng-template cdkPortal>
      <ng-content></ng-content>
    </ng-template>`,
})
export class TabWithPortal {
  @Input() label!: string;

  @ViewChild(CdkPortal, {static: true})
  portalContent!: CdkPortal;
}

@Component({
  selector: 'tabs-with-portal',
  template: `
    <button
      *ngFor="let tab of tabs; let tabIndex = index"
      (click)="selectTab(tabIndex)"
    >
      {{ tab.label }}
    </button>

    <div>
      <ng-template [cdkPortalOutlet]="portals[activeIndex]"></ng-template>
    </div>
  `
})
export class TabsWithPortal {
  activeIndex = 0;
  portals!: Array<CdkPortal>;

  @ContentChildren(TabWithPortal)
  tabs!: QueryList<TabWithPortal>;

  selectTab(tabIndex: number) {
    this.activeIndex = tabIndex;
  }

  ngAfterContentInit() {
    this.portals = this.tabs
      .map(({portalContent}) => {
        const {templateRef, viewContainerRef} = portalContent;
        return new CdkPortal(templateRef, viewContainerRef);
      })
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devdive';
}

