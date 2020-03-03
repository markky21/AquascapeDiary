export interface User {
  _id?: String;
  email: String;
  fullName: String;
  password: String;
  resetToken: String;
  resetTokenExpiration: Number;
}

export interface UserCreate extends Pick<User, 'email' | 'password' | 'fullName'> {
  confirmPassword: String;
}
export interface UserNewPassword extends Pick<User, 'password'> {
  confirmPassword: String;
  reset_password_token: String;
}
export type UserLogin = Pick<User, 'email' | 'password'>;
export type UserLogged = Pick<User, 'email' | 'fullName' | '_id'>;
export type UserRequestPassword = Pick<User, 'email'>;
