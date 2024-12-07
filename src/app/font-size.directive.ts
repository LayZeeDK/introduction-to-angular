// font-size.directive.ts
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
})
export class FontSizeDirective {
  @Input({ required: true })
  @HostBinding('style.fontSize.px')
  appFontSize!: number;
}
