import { IsEmail, IsNotEmpty, Length, Validate } from 'class-validator';

import { UserLogin } from '../../../interfaces/users.model';
import { IsUserValueExist } from '../validators/is-user-value-exist.validator';

export class UserLoginDto implements UserLogin {
  @IsNotEmpty()
  // @Validate(IsUserValueExist, ['email'], {
  //   message: 'Password or email is incorrect or email not exist'
  // })
  public readonly email: String;

  @IsNotEmpty()
  // @Validate(IsUserValueExist, ['password'], {
  //   message: 'Password or email is incorrect or email not exist'
  // })
  public readonly password: String;
}
