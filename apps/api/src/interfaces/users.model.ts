export interface User {
  _id?: String;
  email: String;
  fullName: String;
  password: String;
}

export interface UserCreate
  extends Pick<User, 'email' | 'password' | 'fullName'> {
  confirmPassword: string;
}

export interface UserLogin extends Pick<User, 'email' | 'password'> {}

export interface UserLogged extends Pick<User, 'email' | 'fullName' | '_id'> {}
