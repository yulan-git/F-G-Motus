import { AfterViewInit, Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective implements OnChanges {

  @Input() isLose: boolean;

  constructor(private el: ElementRef) {
    
  }
  ngOnChanges(): void {
    console.log(this.el.nativeElement.childNodes);
    
    this.el.nativeElement.childNodes.style.display = "block";
  }
}
