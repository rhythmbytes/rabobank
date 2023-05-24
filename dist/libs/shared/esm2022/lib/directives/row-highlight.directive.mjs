import { Directive, ElementRef, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
class RowHighlightDirective {
    constructor(el) {
        this.el = el;
    }
    mouseover() {
        this.el.nativeElement.style.backgroundColor = '#D3D3D3';
        this.el.nativeElement.style.cursor = 'pointer';
    }
    mouseout() {
        this.el.nativeElement.style.backgroundColor = '';
        this.el.nativeElement.style.cursor = 'unset';
    }
    static { this.ɵfac = function RowHighlightDirective_Factory(t) { return new (t || RowHighlightDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: RowHighlightDirective, selectors: [["", "rabobankRowHighlight", ""]], hostBindings: function RowHighlightDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseover", function RowHighlightDirective_mouseover_HostBindingHandler() { return ctx.mouseover(); })("mouseout", function RowHighlightDirective_mouseout_HostBindingHandler() { return ctx.mouseout(); });
        } } }); }
}
export { RowHighlightDirective };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RowHighlightDirective, [{
        type: Directive,
        args: [{
                selector: '[rabobankRowHighlight]',
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { mouseover: [{
            type: HostListener,
            args: ['mouseover']
        }], mouseout: [{
            type: HostListener,
            args: ['mouseout']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWhpZ2hsaWdodC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3NoYXJlZC9zcmMvbGliL2RpcmVjdGl2ZXMvcm93LWhpZ2hsaWdodC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVwRSxNQUdhLHFCQUFxQjtJQUNoQyxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFHLENBQUM7SUFFWCxTQUFTO1FBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1FBQ3hELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQ2pELENBQUM7SUFFeUIsUUFBUTtRQUNoQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUMvQyxDQUFDO3NGQVhVLHFCQUFxQjtvRUFBckIscUJBQXFCOzhHQUFyQixlQUFXLHVGQUFYLGNBQVU7OztTQUFWLHFCQUFxQjt1RkFBckIscUJBQXFCO2NBSGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2FBQ25DOzZEQUk0QixTQUFTO2tCQUFuQyxZQUFZO21CQUFDLFdBQVc7WUFLQyxRQUFRO2tCQUFqQyxZQUFZO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmFib2JhbmtSb3dIaWdobGlnaHRdJyxcbn0pXG5leHBvcnQgY2xhc3MgUm93SGlnaGxpZ2h0RGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZW92ZXInKSBtb3VzZW92ZXIoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRDNEM0QzJztcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VvdXQnKSBtb3VzZW91dCgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmN1cnNvciA9ICd1bnNldCc7XG4gIH1cbn1cbiJdfQ==