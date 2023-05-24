import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Json2usersService {
  JSON_URL = '../../assets/users.json';
  users = signal([]);

  constructor(private http: HttpClient) {
    this.http.get(this.JSON_URL).subscribe({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      next: (data: any) => {
        this.users.set(data?.users);
      },
      error: () => {
        this.users.set([]);
      },
    });
  }

  getUsers() {
    return this.users();
  }
}
