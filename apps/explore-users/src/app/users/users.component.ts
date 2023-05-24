import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataModule, Json2usersService } from '@rabobank/data';

@Component({
  selector: 'rabobank-users',
  standalone: true,
  imports: [CommonModule, DataModule],
  providers: [Json2usersService],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  users: any = signal([]);
  constructor(private json2usersService: Json2usersService) {
    this.users = computed(() => this.json2usersService.users());
  }
}
