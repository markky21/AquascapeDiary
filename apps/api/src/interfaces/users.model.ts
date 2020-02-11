export interface User {
  email: String;
  fullName: String;
  password: String;
}

export interface CreateUser
  extends Pick<User, 'email' | 'password' | 'fullName'> {
  confirmPassword: string;
}

export interface LoginUser extends Pick<User, 'email' | 'password'> {}
