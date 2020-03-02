import { IsNotEmpty, Length } from 'class-validator';

import { UserNewPassword } from '../../../interfaces/users.model';

export class UserNewPasswordDto implements UserNewPassword {
  @IsNotEmpty()
  @Length(6, 20)
  public readonly password: String;

  @IsNotEmpty()
  @Length(6, 20)
  public readonly confirmPassword: String;

  @IsNotEmpty()
  public readonly reset_password_token: String;
}
