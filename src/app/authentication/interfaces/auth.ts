export interface User {
  id?: number;
  username: string;
  password: string;
  roles: string[];
}

export interface UserResponse {
  id: number;
  username: string;
  roles: string[];
}

export interface SignInResponse {
  id: number;
  username: string;
  token: string;
}
