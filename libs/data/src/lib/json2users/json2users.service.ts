import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserJsonResponse } from '../interfaces/interface';

@Injectable({
  providedIn: 'root',
})
export class Json2usersService {
  JSON_URL = '../../assets/users.json';
  users = signal<User[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<UserJsonResponse>(this.JSON_URL).subscribe({
      next: (data: UserJsonResponse) => {
        this.users.set(data?.users);
      },
      error: () => {
        this.users.set([]);
      },
    });
  }

  getUsers(): User[] {
    return this.users();
  }
}
