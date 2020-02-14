export interface User {
  _id?: String;
  email: String;
  fullName: String;
  password: String;
  resetToken: String;
  resetTokenExpiration: Number;
}

export interface UserCreate
  extends Pick<User, 'email' | 'password' | 'fullName'> {
  confirmPassword: string;
}
export type UserLogin = Pick<User, 'email' | 'password'>;
export type UserLogged = Pick<User, 'email' | 'fullName' | '_id'>;
export type UserRequestPassword = Pick<User, 'email'>;
