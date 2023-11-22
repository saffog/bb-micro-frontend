export interface LoginRequest {
  email: string;
  password: string;
}

export type AccountType = 'ENTERPRISE' | 'PERSONAL';

export interface LoginResponse {
  accountType: AccountType;
  userName: string;
  userId: string;
}
