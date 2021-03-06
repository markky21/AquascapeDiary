import { IsNotEmpty } from 'class-validator';

import { UserLogin } from '../../../interfaces/users.model';

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
