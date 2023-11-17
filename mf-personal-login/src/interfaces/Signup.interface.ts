export interface SignupRequest {
  name: string;
  email: string;
  password: string;
}

export interface SignupResponse {
  userId: number,
}