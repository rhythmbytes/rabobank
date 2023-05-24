import { TestBed } from '@angular/core/testing';

import { Json2usersService } from './json2users.service';

describe('Json2usersService', () => {
  let service: Json2usersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Json2usersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
