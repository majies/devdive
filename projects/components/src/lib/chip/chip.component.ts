import {Component, HostBinding, Input} from "@angular/core";

@Component({
  selector: 'button[dd-chip]',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {
  @HostBinding('class.chip')
  protected readonly hbClassChip = true;

  @HostBinding('class.chip--active')
  get hbClassChipActive(): boolean {
    return this.active;
  }

  @Input() active: boolean = false;
}
