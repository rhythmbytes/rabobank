import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataModule, Json2usersService } from '@rabobank/data';
import { DataTableComponent } from '@rabobank/ui';

@Component({
  selector: 'rabobank-users',
  standalone: true,
  imports: [CommonModule, DataModule, DataTableComponent],
  providers: [Json2usersService],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataSource: any = signal([]);
  displayedColumns: string[] = [
    'id',
    'fullName',
    'displayName',
    'email',
    'action',
  ];
  constructor(private json2usersService: Json2usersService) {
    this.dataSource = computed(() => this.json2usersService.users());
  }
}
