import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'a[dd-link], button[dd-link]',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {
  @HostBinding('class.link')
  protected readonly hbClassLink = true;
}
