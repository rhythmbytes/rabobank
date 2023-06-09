import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {
  FormsModule,
  ReactiveFormsModule,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { SharedModule } from '@rabobank/shared';
import { DataDialogComponent } from '../data-dialog/data-dialog.component';
import { User } from '@rabobank/data';

@Component({
  selector: 'rabobank-data-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    SharedModule,
    MatDialogModule,
  ],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() displayedColumns: string[] = [
    'id',
    'fullName',
    'displayName',
    'email',
  ];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() dataSource: any = new MatTableDataSource<any>();

  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit() {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource'].currentValue.length) {
      this.dataSource = changes['dataSource'].currentValue;
      this.initForm();
    }
  }

  private initForm() {
    this.form = this.fb.group({
      VORows: this.fb.array(
        this.dataSource?.map((val: User) =>
          this.fb.group({
            id: new FormControl(val.id),
            fullName: new FormControl(val.fullName),
            displayName: new FormControl(val.displayName),
            email: new FormControl(val.email),
            details: new FormControl(val.details),
            action: new FormControl('existingRecord'),
            isEditable: new FormControl(true),
            isEditing: new FormControl(false),
          })
        )
      ),
    });
    this.dataSource = new MatTableDataSource(
      (this.form.get('VORows') as FormArray).controls
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  EditSVO(ev: Event, VOFormElement: any, i: number) {
    ev.stopPropagation();
    VOFormElement.get('VORows').at(i).get('isEditing').patchValue(true);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SaveVO(ev: Event, VOFormElement: any, i: number) {
    ev.stopPropagation();
    VOFormElement.get('VORows').at(i).get('isEditing').patchValue(false);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  CancelSVO(ev: Event, VOFormElement: any, i: number) {
    ev.stopPropagation();
    VOFormElement.get('VORows').at(i).get('isEditing').patchValue(false);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  openDetailsDialog(row: any) {
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
}
