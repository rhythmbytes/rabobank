import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'rabobank-data-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  @Input() displayedColumns: string[] = [
    'id',
    'fullName',
    'displayName',
    'email',
  ];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() dataSource: any = [];
}
