import { IsEmail, IsNotEmpty } from 'class-validator';

import { UserRequestPassword } from '../../../interfaces/users.model';

export class UserRequestPasswordDto implements UserRequestPassword {
  @IsNotEmpty()
  @IsEmail()
  public readonly email: String;
}
