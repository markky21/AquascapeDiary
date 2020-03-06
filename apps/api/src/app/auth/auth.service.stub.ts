import { User, UserLogged } from '../../interfaces/users.model';
import { UserCreateDto } from '../users/dto/user-create.dto';
import { UserNewPasswordDto } from '../users/dto/user-new-password.dto';
import { UserRequestPasswordDto } from '../users/dto/user-request-password.dto';
import { AuthServiceInterface } from './auth.service';

export class AuthServiceStub implements AuthServiceInterface {
  public createToken(): Promise<string> {
    return Promise.resolve(null);
  }

  public login(user: UserLogged): Promise<{ access_token: string; fullName: String; _id: String; email: String }> {
    return Promise.resolve(null);
  }

  public register(createUserDto: UserCreateDto): Promise<User> {
    return Promise.resolve(null);
  }

  public requestPassword(userRequestPasswordDto: UserRequestPasswordDto): Promise<User> {
    return Promise.resolve(null);
  }

  public setNewPassword(userNewPasswordDto: UserNewPasswordDto): Promise<User> {
    return Promise.resolve(null);
  }

  public validateUser(email: string, reqPassword: string): Promise<UserLogged> {
    return Promise.resolve(null);
  }
}
