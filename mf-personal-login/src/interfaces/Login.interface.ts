export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  userId: number,
  userProfile: string,
}