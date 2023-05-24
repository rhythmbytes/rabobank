import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { SharedModule } from '@rabobank/shared';

@Component({
  selector: 'rabobank-data-dialog',
  standalone: true,
  imports: [CommonModule, SharedModule, MatDialogModule],
  templateUrl: './data-dialog.component.html',
  styleUrls: ['./data-dialog.component.scss'],
})
export class DataDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<DataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data.row);
  }

  close() {
    this.dialogRef.close();
  }
}
