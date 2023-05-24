import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class DataTableComponent implements OnInit, OnChanges {
    private fb;
    private dialog;
    displayedColumns: string[];
    dataSource: any;
    form: FormGroup;
    constructor(fb: FormBuilder, dialog: MatDialog);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private initForm;
    EditSVO(ev: Event, VOFormElement: any, i: number): void;
    SaveVO(ev: Event, VOFormElement: any, i: number): void;
    CancelSVO(ev: Event, VOFormElement: any, i: number): void;
    openDetailsDialog(row: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataTableComponent, "rabobank-data-table", never, { "displayedColumns": { "alias": "displayedColumns"; "required": false; }; "dataSource": { "alias": "dataSource"; "required": false; }; }, {}, never, never, true, never>;
}
