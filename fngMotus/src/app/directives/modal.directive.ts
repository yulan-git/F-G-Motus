import { AfterViewInit, Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appModal]'
})
export class ModalDirective implements OnChanges {

  @Input() isLose: boolean;
  @Input() isWon: boolean;

  constructor(private el: ElementRef) {
    
  }
  ngOnChanges(): void {
    
  }
}
