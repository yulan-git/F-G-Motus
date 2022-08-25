import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnChanges{
  @Input() state: string 
  constructor(private el: ElementRef) {
  }

  colors = ["#888289", "#28ba62", "#fc7adf"]
  
  ngOnChanges(): void {
    if (this.state == "match") {
      this.el.nativeElement.style.backgroundColor = this.colors[1].toString();
    }
    if (this.state == "present") {
      this.el.nativeElement.style.backgroundColor = this.colors[2].toString();
    }
    if (this.state == "notPresent") {
      this.el.nativeElement.style.backgroundColor = this.colors[0].toString();
    }

  }




}
