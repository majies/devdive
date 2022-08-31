import {Component, HostBinding, Input} from '@angular/core'

@Component({
  selector: '[dd-text]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent {
  @HostBinding('class.type')
  protected readonly hbClassType = true;

  @HostBinding('class.type--size-xs')
  get hbClassTypeSizeXs(): boolean {
    return this.size === 'xs'
  }

  @HostBinding('class.type--size-sm')
  get hbClassTypeSizeSm(): boolean {
    return this.size === 'sm'
  }

  @HostBinding('class.type--size-md')
  get hbClassTypeSizeMd(): boolean {
    return this.size === 'md'
  }

  @HostBinding('class.type--size-lg')
  get hbClassTypeSizeLg(): boolean {
    return this.size === 'lg'
  }

  @HostBinding('class.type--size-xl')
  get hbClassTypeSizeXl(): boolean {
    return this.size === 'xl'
  }

  @HostBinding('class.type--size-2xl')
  get hbClassTypeSizeXXl(): boolean {
    return this.size === '2xl'
  }

  @HostBinding('class.type--weight-light')
  get hbClassTypeWeightLight(): boolean {
    return this.weight === 'light'
  }

  @HostBinding('class.type--weight-regular')
  get hbClassTypeWeightRegular(): boolean {
    return this.weight === 'regular'
  }

  @HostBinding('class.type--weight-bold')
  get hbClassTypeWeightBold(): boolean {
    return this.weight === 'bold'
  }

  @HostBinding('class.type--weight-heavy')
  get hbClassTypeWeightHeavy(): boolean {
    return this.weight === 'heavy'
  }

  @HostBinding('class.type--colour-default')
  get hbClassTypeColourDefault(): boolean {
    return this.colour === 'default'
  }

  @HostBinding('class.type--colour-white')
  get hbClassTypeColourWhite(): boolean {
    return this.colour === 'white'
  }

  @HostBinding('class.type--colour-inherit')
  get hbClassTypeColourInherit(): boolean {
    return this.colour === 'inherit'
  }

  @HostBinding('class.type--margin-bottom')
  get hbClassTypeMarginBottom(): boolean {
    return this.marginBottom;
  }

  @HostBinding('class.type--align-center')
  get hbClassTypeAlignCenter(): boolean {
    return this.alignCenter;
  }


  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'sm';

  @Input() weight: 'light' | 'regular' | 'bold' | 'heavy' = 'regular'

  @Input() colour: 'default' | 'white' | 'inherit' = 'default';

  @Input() marginBottom: boolean = false;

  @Input() alignCenter: boolean = false;
}
