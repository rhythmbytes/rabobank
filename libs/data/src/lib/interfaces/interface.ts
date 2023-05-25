export interface User {
  id: number;
  fullName: string;
  displayName: string;
  email: string;
  details: string;
}

export interface UserJsonResponse {
  users: User[];
}
