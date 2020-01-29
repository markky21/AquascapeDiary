export interface AuthError {
  code: string;
  message: string;
}

export enum SubmitAction {
  LOGIN,
  REGISTER,
  RESET
}
