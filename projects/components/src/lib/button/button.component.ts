import {Component, HostBinding} from "@angular/core";

@Component({
  selector: 'button[dd-button], a[dd-button]',
  templateUrl: './button.component.html',
  styleUrls: ['button.component.css']
})
export class ButtonComponent {
  @HostBinding('class.button')
  protected readonly hbClassButton = true;
}
