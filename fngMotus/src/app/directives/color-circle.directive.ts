import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class ColorCircleDirective {
  @Input() ColorCircle: string;
  @HostBinding('class') letterClassName!: string;

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'blue';
  }



}
