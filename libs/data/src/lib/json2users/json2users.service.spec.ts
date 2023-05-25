import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Json2usersService } from './json2users.service';

describe('Json2usersService', () => {
  let service: Json2usersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Json2usersService],
    });
    service = TestBed.inject(Json2usersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    httpMock.expectOne(service.JSON_URL).flush({});
    expect(service).toBeTruthy();
  });

  it('should fetch users from the JSON file', () => {
    const mockUsers = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];

    const req = httpMock.expectOne(service.JSON_URL);
    expect(req.request.method).toBe('GET');
    req.flush({ users: mockUsers });
    const users = service.getUsers();
    expect(users).toEqual(mockUsers);
  });

  it('should handle error when fetching users', () => {
    const users = service.getUsers();
    expect(users).toEqual([]);

    const req = httpMock.expectOne(service.JSON_URL);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('network error'));
  });

  it('should handle empty response from JSON file', () => {
    const users = service.getUsers();
    expect(users).toEqual([]);

    const req = httpMock.expectOne(service.JSON_URL);
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('should handle undefined users in JSON response', () => {
    const users = service.getUsers();
    expect(users).toEqual([]);

    const req = httpMock.expectOne(service.JSON_URL);
    expect(req.request.method).toBe('GET');
    req.flush({ users: undefined });
  });

  it('should handle null users in JSON response', () => {
    const users = service.getUsers();
    expect(users).toEqual([]);

    const req = httpMock.expectOne(service.JSON_URL);
    expect(req.request.method).toBe('GET');
    req.flush({ users: null });
  });
});
