import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamelCaseToTitlePipe } from './pipes/camel-case-to-title.pipe';
import { RowHighlightDirective } from './directives/row-highlight.directive';
import * as i0 from "@angular/core";
class SharedModule {
    static { this.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SharedModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
export { SharedModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [CamelCaseToTitlePipe, RowHighlightDirective],
                exports: [CamelCaseToTitlePipe, RowHighlightDirective],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { declarations: [CamelCaseToTitlePipe, RowHighlightDirective], imports: [CommonModule], exports: [CamelCaseToTitlePipe, RowHighlightDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvc2hhcmVkL3NyYy9saWIvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFN0UsTUFLYSxZQUFZOzZFQUFaLFlBQVk7bUVBQVosWUFBWTt1RUFKYixZQUFZOztTQUlYLFlBQVk7dUZBQVosWUFBWTtjQUx4QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxxQkFBcUIsQ0FBQztnQkFDM0QsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUscUJBQXFCLENBQUM7YUFDdkQ7O3dGQUNZLFlBQVksbUJBSFIsb0JBQW9CLEVBQUUscUJBQXFCLGFBRGhELFlBQVksYUFFWixvQkFBb0IsRUFBRSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENhbWVsQ2FzZVRvVGl0bGVQaXBlIH0gZnJvbSAnLi9waXBlcy9jYW1lbC1jYXNlLXRvLXRpdGxlLnBpcGUnO1xuaW1wb3J0IHsgUm93SGlnaGxpZ2h0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Jvdy1oaWdobGlnaHQuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0NhbWVsQ2FzZVRvVGl0bGVQaXBlLCBSb3dIaWdobGlnaHREaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbQ2FtZWxDYXNlVG9UaXRsZVBpcGUsIFJvd0hpZ2hsaWdodERpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7fVxuIl19