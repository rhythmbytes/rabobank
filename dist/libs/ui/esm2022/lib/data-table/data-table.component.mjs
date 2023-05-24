import { Component, Input, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormControl, } from '@angular/forms';
import { SharedModule } from '@rabobank/shared';
import { DataDialogComponent } from '../data-dialog/data-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/dialog";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/table";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@rabobank/shared";
function DataTableComponent_ng_container_3_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "camelCaseToTitle");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, col_r3), " ");
} }
function DataTableComponent_ng_container_3_ng_container_1_td_2_mat_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r10 = i0.ɵɵnextContext().index;
    const col_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r11 = i0.ɵɵnextContext();
    let tmp_0_0;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", (tmp_0_0 = ctx_r11.form.get("VORows")) == null ? null : tmp_0_0.value[i_r10][col_r3], " ");
} }
function DataTableComponent_ng_container_3_ng_container_1_td_2_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 15);
    i0.ɵɵelement(1, "input", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r10 = i0.ɵɵnextContext().index;
    const col_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r12 = i0.ɵɵnextContext();
    let tmp_1_0;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControlName", col_r3)("readonly", !((tmp_1_0 = ctx_r12.form.get("VORows")) == null ? null : tmp_1_0.value[i_r10] == null ? null : tmp_1_0.value[i_r10].isEditable));
} }
function DataTableComponent_ng_container_3_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtemplate(1, DataTableComponent_ng_container_3_ng_container_1_td_2_mat_label_1_Template, 2, 1, "mat-label", 13);
    i0.ɵɵtemplate(2, DataTableComponent_ng_container_3_ng_container_1_td_2_mat_form_field_2_Template, 2, 2, "mat-form-field", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r7 = i0.ɵɵnextContext(3);
    let tmp_1_0;
    let tmp_2_0;
    i0.ɵɵproperty("formGroup", element_r9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !((tmp_1_0 = ctx_r7.form.get("VORows")) == null ? null : tmp_1_0.value[i_r10] == null ? null : tmp_1_0.value[i_r10].isEditing));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (tmp_2_0 = ctx_r7.form.get("VORows")) == null ? null : tmp_2_0.value[i_r10] == null ? null : tmp_2_0.value[i_r10].isEditing);
} }
function DataTableComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 8);
    i0.ɵɵtemplate(1, DataTableComponent_ng_container_3_ng_container_1_th_1_Template, 3, 3, "th", 9);
    i0.ɵɵtemplate(2, DataTableComponent_ng_container_3_ng_container_1_td_2_Template, 3, 3, "td", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("matColumnDef", col_r3);
} }
function DataTableComponent_ng_container_3_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "Action");
    i0.ɵɵelementEnd();
} }
function DataTableComponent_ng_container_3_ng_container_2_td_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function DataTableComponent_ng_container_3_ng_container_2_td_2_button_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r26); const i_r21 = i0.ɵɵnextContext().index; const ctx_r25 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r25.SaveVO($event, ctx_r25.form, i_r21)); });
    i0.ɵɵtext(1, " Save ");
    i0.ɵɵelementEnd();
} }
function DataTableComponent_ng_container_3_ng_container_2_td_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 22);
    i0.ɵɵlistener("click", function DataTableComponent_ng_container_3_ng_container_2_td_2_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r29); const i_r21 = i0.ɵɵnextContext().index; const ctx_r28 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r28.CancelSVO($event, ctx_r28.form, i_r21)); });
    i0.ɵɵtext(1, " Cancel ");
    i0.ɵɵelementEnd();
} }
function DataTableComponent_ng_container_3_ng_container_2_td_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function DataTableComponent_ng_container_3_ng_container_2_td_2_button_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r32); const i_r21 = i0.ɵɵnextContext().index; const ctx_r31 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r31.EditSVO($event, ctx_r31.form, i_r21)); });
    i0.ɵɵtext(1, " Edit ");
    i0.ɵɵelementEnd();
} }
function DataTableComponent_ng_container_3_ng_container_2_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtemplate(1, DataTableComponent_ng_container_3_ng_container_2_td_2_button_1_Template, 2, 0, "button", 18);
    i0.ɵɵtemplate(2, DataTableComponent_ng_container_3_ng_container_2_td_2_button_2_Template, 2, 0, "button", 19);
    i0.ɵɵtemplate(3, DataTableComponent_ng_container_3_ng_container_2_td_2_button_3_Template, 2, 0, "button", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    const ctx_r19 = i0.ɵɵnextContext(3);
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    i0.ɵɵproperty("formGroup", element_r20);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (tmp_1_0 = ctx_r19.form.get("VORows")) == null ? null : tmp_1_0.value[i_r21] == null ? null : tmp_1_0.value[i_r21].isEditing);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (tmp_2_0 = ctx_r19.form.get("VORows")) == null ? null : tmp_2_0.value[i_r21] == null ? null : tmp_2_0.value[i_r21].isEditing);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !((tmp_3_0 = ctx_r19.form.get("VORows")) == null ? null : tmp_3_0.value[i_r21] == null ? null : tmp_3_0.value[i_r21].isEditing));
} }
function DataTableComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 17);
    i0.ɵɵtemplate(1, DataTableComponent_ng_container_3_ng_container_2_th_1_Template, 2, 0, "th", 9);
    i0.ɵɵtemplate(2, DataTableComponent_ng_container_3_ng_container_2_td_2_Template, 4, 4, "td", 10);
    i0.ɵɵelementContainerEnd();
} }
function DataTableComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DataTableComponent_ng_container_3_ng_container_1_Template, 3, 1, "ng-container", 6);
    i0.ɵɵtemplate(2, DataTableComponent_ng_container_3_ng_container_2_Template, 3, 0, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r3 !== "action");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r3 === "action");
} }
function DataTableComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 24);
} }
function DataTableComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 25);
    i0.ɵɵlistener("click", function DataTableComponent_tr_5_Template_tr_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r36); const row_r34 = restoredCtx.$implicit; const ctx_r35 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r35.openDetailsDialog(row_r34.value)); });
    i0.ɵɵelementEnd();
} }
class DataTableComponent {
    constructor(fb, dialog) {
        this.fb = fb;
        this.dialog = dialog;
        this.displayedColumns = [
            'id',
            'fullName',
            'displayName',
            'email',
        ];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.dataSource = new MatTableDataSource();
        this.form = this.fb.group({});
    }
    ngOnInit() {
        this.initForm();
    }
    ngOnChanges(changes) {
        if (changes['dataSource'].currentValue.length) {
            this.dataSource = changes['dataSource'].currentValue;
            this.initForm();
        }
    }
    initForm() {
        this.form = this.fb.group({
            VORows: this.fb.array(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.dataSource?.map((val) => this.fb.group({
                id: new FormControl(val.id),
                fullName: new FormControl(val.fullName),
                displayName: new FormControl(val.displayName),
                email: new FormControl(val.email),
                details: new FormControl(val.details),
                action: new FormControl('existingRecord'),
                isEditable: new FormControl(true),
                isEditing: new FormControl(false),
            }))),
        });
        this.dataSource = new MatTableDataSource(this.form.get('VORows').controls);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    EditSVO(ev, VOFormElement, i) {
        ev.stopPropagation();
        VOFormElement.get('VORows').at(i).get('isEditing').patchValue(true);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SaveVO(ev, VOFormElement, i) {
        ev.stopPropagation();
        VOFormElement.get('VORows').at(i).get('isEditing').patchValue(false);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CancelSVO(ev, VOFormElement, i) {
        ev.stopPropagation();
        VOFormElement.get('VORows').at(i).get('isEditing').patchValue(false);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    openDetailsDialog(row) {
        if (!row.isEditing && this.dialog.openDialogs.length == 0) {
            this.dialog.open(DataDialogComponent, {
                disableClose: false,
                data: {
                    displayFields: ['id', 'fullName', 'displayName', 'email', 'details'],
                    row,
                },
            });
        }
    }
    static { this.ɵfac = function DataTableComponent_Factory(t) { return new (t || DataTableComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.MatDialog)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTableComponent, selectors: [["rabobank-data-table"]], inputs: { displayedColumns: "displayedColumns", dataSource: "dataSource" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 6, vars: 5, consts: [["autocomplete", "off", 3, "formGroup"], ["formArrayName", "VORows"], ["mat-table", "", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "rabobankRowHighlight", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef", 4, "ngIf"], ["matColumnDef", "action", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "formGroup", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", "", 3, "formGroup"], [4, "ngIf"], ["style", "width: auto", 4, "ngIf"], [2, "width", "auto"], ["matInput", "", "type", "text", 3, "formControlName", "readonly"], ["matColumnDef", "action"], ["mat-icon-button", "", "class", "material-icons app-toolbar-menu save-button", "matTooltip", "Save Changes", "color", "primary", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "class", "material-icons app-toolbar-menu cancel-button", "matTooltip", "Cancel Changes", "color", "warn", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "class", "material-icons app-toolbar-menu save-button", "matTooltip", "Edit", "color", "primary", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Save Changes", "color", "primary", 1, "material-icons", "app-toolbar-menu", "save-button", 3, "click"], ["mat-icon-button", "", "matTooltip", "Cancel Changes", "color", "warn", 1, "material-icons", "app-toolbar-menu", "cancel-button", 3, "click"], ["mat-icon-button", "", "matTooltip", "Edit", "color", "primary", 1, "material-icons", "app-toolbar-menu", "save-button", 3, "click"], ["mat-header-row", ""], ["mat-row", "", "rabobankRowHighlight", "", 3, "click"]], template: function DataTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementContainerStart(1, 1);
            i0.ɵɵelementStart(2, "table", 2);
            i0.ɵɵtemplate(3, DataTableComponent_ng_container_3_Template, 3, 2, "ng-container", 3);
            i0.ɵɵtemplate(4, DataTableComponent_tr_4_Template, 1, 0, "tr", 4);
            i0.ɵɵtemplate(5, DataTableComponent_tr_5_Template, 1, 0, "tr", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("dataSource", ctx.dataSource);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        } }, dependencies: [CommonModule, i3.NgForOf, i3.NgIf, FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, ReactiveFormsModule, i1.FormGroupDirective, i1.FormControlName, i1.FormArrayName, MatTableModule, i4.MatTable, i4.MatHeaderCellDef, i4.MatHeaderRowDef, i4.MatColumnDef, i4.MatCellDef, i4.MatRowDef, i4.MatHeaderCell, i4.MatCell, i4.MatHeaderRow, i4.MatRow, MatInputModule, i5.MatInput, i6.MatFormField, i6.MatLabel, SharedModule, i7.CamelCaseToTitlePipe, i7.RowHighlightDirective, MatDialogModule], styles: ["[_nghost-%COMP%]{display:block}"] }); }
}
export { DataTableComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableComponent, [{
        type: Component,
        args: [{ selector: 'rabobank-data-table', standalone: true, imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatTableModule,
                    MatInputModule,
                    SharedModule,
                    MatDialogModule,
                ], template: "<form [formGroup]=\"form\" autocomplete=\"off\">\n  <ng-container formArrayName=\"VORows\">\n    <table mat-table [dataSource]=\"dataSource\">\n      <ng-container *ngFor=\"let col of displayedColumns\">\n        <ng-container [matColumnDef]=\"col\" *ngIf=\"col !== 'action'\">\n          <th mat-header-cell *matHeaderCellDef>\n            {{ col | camelCaseToTitle }}\n          </th>\n          <td\n            mat-cell\n            *matCellDef=\"let element; let i = index\"\n            [formGroup]=\"element\"\n          >\n            <mat-label *ngIf=\"!form.get('VORows')?.value[i]?.isEditing\">\n              {{ form.get('VORows')?.value[i][col] }}\n            </mat-label>\n            <mat-form-field\n              style=\"width: auto\"\n              *ngIf=\"form.get('VORows')?.value[i]?.isEditing\"\n            >\n              <input\n                matInput\n                type=\"text\"\n                [formControlName]=\"col\"\n                [readonly]=\"!form.get('VORows')?.value[i]?.isEditable\"\n              />\n            </mat-form-field>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"action\" *ngIf=\"col === 'action'\">\n          <th mat-header-cell *matHeaderCellDef>Action</th>\n          <td\n            mat-cell\n            *matCellDef=\"let element; let i = index\"\n            [formGroup]=\"element\"\n          >\n            <button\n              mat-icon-button\n              class=\"material-icons app-toolbar-menu save-button\"\n              matTooltip=\"Save Changes\"\n              (click)=\"SaveVO($event, form, i)\"\n              *ngIf=\"form.get('VORows')?.value[i]?.isEditing\"\n              color=\"primary\"\n            >\n              Save\n            </button>\n\n            <button\n              mat-icon-button\n              class=\"material-icons app-toolbar-menu cancel-button\"\n              matTooltip=\"Cancel Changes\"\n              color=\"warn\"\n              (click)=\"CancelSVO($event, form, i)\"\n              *ngIf=\"form.get('VORows')?.value[i]?.isEditing\"\n            >\n              Cancel\n            </button>\n\n            <button\n              mat-icon-button\n              class=\"material-icons app-toolbar-menu save-button\"\n              *ngIf=\"!form.get('VORows')?.value[i]?.isEditing\"\n              matTooltip=\"Edit\"\n              color=\"primary\"\n              (click)=\"EditSVO($event, form, i)\"\n            >\n              Edit\n            </button>\n          </td>\n        </ng-container>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr\n        mat-row\n        *matRowDef=\"let row; columns: displayedColumns\"\n        rabobankRowHighlight\n        (click)=\"openDetailsDialog(row.value)\"\n      ></tr>\n    </table>\n  </ng-container>\n</form>\n", styles: [":host{display:block}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.MatDialog }]; }, { displayedColumns: [{
            type: Input
        }], dataSource: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9saWJzL3VpL3NyYy9saWIvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvdWkvc3JjL2xpYi9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEdBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsV0FBVyxFQUNYLG1CQUFtQixFQUVuQixXQUFXLEVBQ1gsV0FBVyxHQUVaLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7Ozs7O0lDZmpFLDhCQUFzQztJQUNwQyxZQUNGOztJQUFBLGlCQUFLOzs7SUFESCxlQUNGO0lBREUsNkRBQ0Y7OztJQU1FLGlDQUE0RDtJQUMxRCxZQUNGO0lBQUEsaUJBQVk7Ozs7OztJQURWLGVBQ0Y7SUFERSxxSEFDRjs7O0lBQ0EsMENBR0M7SUFDQyw0QkFLRTtJQUNKLGlCQUFpQjs7Ozs7O0lBSGIsZUFBdUI7SUFBdkIsd0NBQXVCLDhJQUFBOzs7SUFmN0IsOEJBSUM7SUFDQyxtSEFFWTtJQUNaLDZIQVVpQjtJQUNuQixpQkFBSzs7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Q2hhbmdlcyxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UsIE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge1xuICBGb3Jtc01vZHVsZSxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgRm9ybUFycmF5LFxuICBGb3JtQnVpbGRlcixcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1Hcm91cCxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnQHJhYm9iYW5rL3NoYXJlZCc7XG5pbXBvcnQgeyBEYXRhRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0YS1kaWFsb2cvZGF0YS1kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmFib2JhbmstZGF0YS10YWJsZScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBTaGFyZWRNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtcbiAgICAnaWQnLFxuICAgICdmdWxsTmFtZScsXG4gICAgJ2Rpc3BsYXlOYW1lJyxcbiAgICAnZW1haWwnLFxuICBdO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBASW5wdXQoKSBkYXRhU291cmNlOiBhbnkgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPGFueT4oKTtcblxuICBmb3JtOiBGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHt9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRGb3JtKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXNbJ2RhdGFTb3VyY2UnXS5jdXJyZW50VmFsdWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UgPSBjaGFuZ2VzWydkYXRhU291cmNlJ10uY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy5pbml0Rm9ybSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdEZvcm0oKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBWT1Jvd3M6IHRoaXMuZmIuYXJyYXkoXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZT8ubWFwKCh2YWw6IGFueSkgPT5cbiAgICAgICAgICB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICAgICAgIGlkOiBuZXcgRm9ybUNvbnRyb2wodmFsLmlkKSxcbiAgICAgICAgICAgIGZ1bGxOYW1lOiBuZXcgRm9ybUNvbnRyb2wodmFsLmZ1bGxOYW1lKSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBuZXcgRm9ybUNvbnRyb2wodmFsLmRpc3BsYXlOYW1lKSxcbiAgICAgICAgICAgIGVtYWlsOiBuZXcgRm9ybUNvbnRyb2wodmFsLmVtYWlsKSxcbiAgICAgICAgICAgIGRldGFpbHM6IG5ldyBGb3JtQ29udHJvbCh2YWwuZGV0YWlscyksXG4gICAgICAgICAgICBhY3Rpb246IG5ldyBGb3JtQ29udHJvbCgnZXhpc3RpbmdSZWNvcmQnKSxcbiAgICAgICAgICAgIGlzRWRpdGFibGU6IG5ldyBGb3JtQ29udHJvbCh0cnVlKSxcbiAgICAgICAgICAgIGlzRWRpdGluZzogbmV3IEZvcm1Db250cm9sKGZhbHNlKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApLFxuICAgIH0pO1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoXG4gICAgICAodGhpcy5mb3JtLmdldCgnVk9Sb3dzJykgYXMgRm9ybUFycmF5KS5jb250cm9sc1xuICAgICk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBFZGl0U1ZPKGV2OiBFdmVudCwgVk9Gb3JtRWxlbWVudDogYW55LCBpOiBudW1iZXIpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBWT0Zvcm1FbGVtZW50LmdldCgnVk9Sb3dzJykuYXQoaSkuZ2V0KCdpc0VkaXRpbmcnKS5wYXRjaFZhbHVlKHRydWUpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgU2F2ZVZPKGV2OiBFdmVudCwgVk9Gb3JtRWxlbWVudDogYW55LCBpOiBudW1iZXIpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBWT0Zvcm1FbGVtZW50LmdldCgnVk9Sb3dzJykuYXQoaSkuZ2V0KCdpc0VkaXRpbmcnKS5wYXRjaFZhbHVlKGZhbHNlKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gIENhbmNlbFNWTyhldjogRXZlbnQsIFZPRm9ybUVsZW1lbnQ6IGFueSwgaTogbnVtYmVyKSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgVk9Gb3JtRWxlbWVudC5nZXQoJ1ZPUm93cycpLmF0KGkpLmdldCgnaXNFZGl0aW5nJykucGF0Y2hWYWx1ZShmYWxzZSk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICBvcGVuRGV0YWlsc0RpYWxvZyhyb3c6IGFueSkge1xuICAgIGlmICghcm93LmlzRWRpdGluZyAmJiB0aGlzLmRpYWxvZy5vcGVuRGlhbG9ncy5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5kaWFsb2cub3BlbihEYXRhRGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICAgIGRpc2FibGVDbG9zZTogZmFsc2UsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBkaXNwbGF5RmllbGRzOiBbJ2lkJywgJ2Z1bGxOYW1lJywgJ2Rpc3BsYXlOYW1lJywgJ2VtYWlsJywgJ2RldGFpbHMnXSxcbiAgICAgICAgICByb3csXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICA8bmctY29udGFpbmVyIGZvcm1BcnJheU5hbWU9XCJWT1Jvd3NcIj5cbiAgICA8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbCBvZiBkaXNwbGF5ZWRDb2x1bW5zXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgW21hdENvbHVtbkRlZl09XCJjb2xcIiAqbmdJZj1cImNvbCAhPT0gJ2FjdGlvbidcIj5cbiAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxuICAgICAgICAgICAge3sgY29sIHwgY2FtZWxDYXNlVG9UaXRsZSB9fVxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRkXG4gICAgICAgICAgICBtYXQtY2VsbFxuICAgICAgICAgICAgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudDsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgICAgICBbZm9ybUdyb3VwXT1cImVsZW1lbnRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtYXQtbGFiZWwgKm5nSWY9XCIhZm9ybS5nZXQoJ1ZPUm93cycpPy52YWx1ZVtpXT8uaXNFZGl0aW5nXCI+XG4gICAgICAgICAgICAgIHt7IGZvcm0uZ2V0KCdWT1Jvd3MnKT8udmFsdWVbaV1bY29sXSB9fVxuICAgICAgICAgICAgPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGRcbiAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDogYXV0b1wiXG4gICAgICAgICAgICAgICpuZ0lmPVwiZm9ybS5nZXQoJ1ZPUm93cycpPy52YWx1ZVtpXT8uaXNFZGl0aW5nXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb2xcIlxuICAgICAgICAgICAgICAgIFtyZWFkb25seV09XCIhZm9ybS5nZXQoJ1ZPUm93cycpPy52YWx1ZVtpXT8uaXNFZGl0YWJsZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImFjdGlvblwiICpuZ0lmPVwiY29sID09PSAnYWN0aW9uJ1wiPlxuICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+QWN0aW9uPC90aD5cbiAgICAgICAgICA8dGRcbiAgICAgICAgICAgIG1hdC1jZWxsXG4gICAgICAgICAgICAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50OyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwiZWxlbWVudFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBtYXQtaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyBhcHAtdG9vbGJhci1tZW51IHNhdmUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgbWF0VG9vbHRpcD1cIlNhdmUgQ2hhbmdlc1wiXG4gICAgICAgICAgICAgIChjbGljayk9XCJTYXZlVk8oJGV2ZW50LCBmb3JtLCBpKVwiXG4gICAgICAgICAgICAgICpuZ0lmPVwiZm9ybS5nZXQoJ1ZPUm93cycpPy52YWx1ZVtpXT8uaXNFZGl0aW5nXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgYXBwLXRvb2xiYXItbWVudSBjYW5jZWwtYnV0dG9uXCJcbiAgICAgICAgICAgICAgbWF0VG9vbHRpcD1cIkNhbmNlbCBDaGFuZ2VzXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIkNhbmNlbFNWTygkZXZlbnQsIGZvcm0sIGkpXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJmb3JtLmdldCgnVk9Sb3dzJyk/LnZhbHVlW2ldPy5pc0VkaXRpbmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLWljb25zIGFwcC10b29sYmFyLW1lbnUgc2F2ZS1idXR0b25cIlxuICAgICAgICAgICAgICAqbmdJZj1cIiFmb3JtLmdldCgnVk9Sb3dzJyk/LnZhbHVlW2ldPy5pc0VkaXRpbmdcIlxuICAgICAgICAgICAgICBtYXRUb29sdGlwPVwiRWRpdFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJFZGl0U1ZPKCRldmVudCwgZm9ybSwgaSlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgICAgPHRyXG4gICAgICAgIG1hdC1yb3dcbiAgICAgICAgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnNcIlxuICAgICAgICByYWJvYmFua1Jvd0hpZ2hsaWdodFxuICAgICAgICAoY2xpY2spPVwib3BlbkRldGFpbHNEaWFsb2cocm93LnZhbHVlKVwiXG4gICAgICA+PC90cj5cbiAgICA8L3RhYmxlPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZm9ybT5cbiJdfQ==