import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMymdirective]'
})
export class MymdirectiveDirective {

  constructor(private elementRef:ElementRef) { 
    this.elementRef.nativeElement.style.backgroundColor = '#FFF';
  }

}
