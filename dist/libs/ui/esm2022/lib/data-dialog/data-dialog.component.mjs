import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
import { SharedModule } from '@rabobank/shared';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@rabobank/shared";
function DataDialogComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "p")(2, "span", 5);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "camelCaseToTitle");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, field_r1), ":");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.data.row[field_r1], " ");
} }
class DataDialogComponent {
    constructor(dialogRef, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    close() {
        this.dialogRef.close();
    }
    static { this.ɵfac = function DataDialogComponent_Factory(t) { return new (t || DataDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataDialogComponent, selectors: [["rabobank-data-dialog"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 7, vars: 1, consts: [["mat-dialog-title", "", 1, "title"], ["mat-dialog-content", ""], [4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], [3, "click"], [1, "field-label"]], template: function DataDialogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1", 0);
            i0.ɵɵtext(1, "User details");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵtemplate(3, DataDialogComponent_ng_container_3_Template, 6, 4, "ng-container", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3)(5, "button", 4);
            i0.ɵɵlistener("click", function DataDialogComponent_Template_button_click_5_listener() { return ctx.close(); });
            i0.ɵɵtext(6, "Close");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.data.displayFields);
        } }, dependencies: [CommonModule, i2.NgForOf, SharedModule, i3.CamelCaseToTitlePipe, MatDialogModule, i1.MatDialogTitle, i1.MatDialogContent, i1.MatDialogActions], styles: [".title[_ngcontent-%COMP%]{font-weight:700}.field-label[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:#000}"] }); }
}
export { DataDialogComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataDialogComponent, [{
        type: Component,
        args: [{ selector: 'rabobank-data-dialog', standalone: true, imports: [CommonModule, SharedModule, MatDialogModule], template: "<h1 mat-dialog-title class=\"title\">User details</h1>\n<div mat-dialog-content>\n  <ng-container *ngFor=\"let field of data.displayFields\">\n    <p>\n      <span class=\"field-label\">{{ field | camelCaseToTitle }}:</span>\n      {{ data.row[field] }}\n    </p>\n  </ng-container>\n</div>\n<div mat-dialog-actions>\n  <button (click)=\"close()\">Close</button>\n</div>\n", styles: [".title{font-weight:700}.field-label{font-size:12px;font-weight:600;color:#000}\n"] }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy91aS9zcmMvbGliL2RhdGEtZGlhbG9nL2RhdGEtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9kYXRhLWRpYWxvZy9kYXRhLWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFDZixlQUFlLEVBQ2YsWUFBWSxHQUNiLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7SUNMOUMsNkJBQXVEO0lBQ3JELHlCQUFHLGNBQUE7SUFDeUIsWUFBK0I7O0lBQUEsaUJBQU87SUFDaEUsWUFDRjtJQUFBLGlCQUFJO0lBQ04sMEJBQWU7Ozs7SUFIZSxlQUErQjtJQUEvQiw4REFBK0I7SUFDekQsZUFDRjtJQURFLDBEQUNGOztBREdKLE1BT2EsbUJBQW1CO0lBQzlCLFlBQ1UsU0FBNEM7SUFDcEQsOERBQThEO0lBQzlCLElBQVM7UUFGakMsY0FBUyxHQUFULFNBQVMsQ0FBbUM7UUFFcEIsU0FBSSxHQUFKLElBQUksQ0FBSztJQUN4QyxDQUFDO0lBRUosS0FBSztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztvRkFUVSxtQkFBbUIsOERBSXBCLGVBQWU7b0VBSmQsbUJBQW1CO1lDaEJoQyw2QkFBbUM7WUFBQSw0QkFBWTtZQUFBLGlCQUFLO1lBQ3BELDhCQUF3QjtZQUN0QixzRkFLZTtZQUNqQixpQkFBTTtZQUNOLDhCQUF3QixnQkFBQTtZQUNkLGdHQUFTLFdBQU8sSUFBQztZQUFDLHFCQUFLO1lBQUEsaUJBQVMsRUFBQTs7WUFSUixlQUFxQjtZQUFyQixnREFBcUI7NEJEVTNDLFlBQVksY0FBRSxZQUFZLDJCQUFFLGVBQWU7O1NBSTFDLG1CQUFtQjt1RkFBbkIsbUJBQW1CO2NBUC9CLFNBQVM7MkJBQ0Usc0JBQXNCLGNBQ3BCLElBQUksV0FDUCxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDOztzQkFRbkQsTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBNQVRfRElBTE9HX0RBVEEsXG4gIE1hdERpYWxvZ01vZHVsZSxcbiAgTWF0RGlhbG9nUmVmLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnQHJhYm9iYW5rL3NoYXJlZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JhYm9iYW5rLWRhdGEtZGlhbG9nJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2hhcmVkTW9kdWxlLCBNYXREaWFsb2dNb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRhLWRpYWxvZy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhRGlhbG9nQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEYXRhRGlhbG9nQ29tcG9uZW50PixcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55XG4gICkge31cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iLCI8aDEgbWF0LWRpYWxvZy10aXRsZSBjbGFzcz1cInRpdGxlXCI+VXNlciBkZXRhaWxzPC9oMT5cbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBkYXRhLmRpc3BsYXlGaWVsZHNcIj5cbiAgICA8cD5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZmllbGQtbGFiZWxcIj57eyBmaWVsZCB8IGNhbWVsQ2FzZVRvVGl0bGUgfX06PC9zcGFuPlxuICAgICAge3sgZGF0YS5yb3dbZmllbGRdIH19XG4gICAgPC9wPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnM+XG4gIDxidXR0b24gKGNsaWNrKT1cImNsb3NlKClcIj5DbG9zZTwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=