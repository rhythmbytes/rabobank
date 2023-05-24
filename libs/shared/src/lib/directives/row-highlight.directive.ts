import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[rabobankRowHighlight]',
})
export class RowHighlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseover') mouseover() {
    this.el.nativeElement.style.backgroundColor = '#D3D3D3';
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseout') mouseout() {
    this.el.nativeElement.style.backgroundColor = '';
    this.el.nativeElement.style.cursor = 'unset';
  }
}
