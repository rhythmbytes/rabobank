import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {
  FormsModule,
  ReactiveFormsModule,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'rabobank-data-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource'].currentValue.length) {
      this.dataSource = changes['dataSource'].currentValue;
      this.initForm();
    }
  }

  initForm() {
    this.form = this.fb.group({
      VORows: this.fb.array(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.dataSource?.map((val: any) =>
          this.fb.group({
            id: new FormControl(val.id),
            fullName: new FormControl(val.fullName),
            displayName: new FormControl(val.displayName),
            email: new FormControl(val.email),
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
  EditSVO(VOFormElement: any, i: number) {
    VOFormElement.get('VORows').at(i).get('isEditing').patchValue(true);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SaveVO(VOFormElement: any, i: number) {
    VOFormElement.get('VORows').at(i).get('isEditing').patchValue(false);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  CancelSVO(VOFormElement: any, i: number) {
    VOFormElement.get('VORows').at(i).get('isEditing').patchValue(false);
  }
}
