import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Validate
} from 'class-validator';

import { UserCreate } from '../../../interfaces/users.model';
import { IsUserAlreadyExist } from '../validators/is-user-already-exist.validator';

export class UserCreateDto implements UserCreate {
  @IsNotEmpty()
  @IsEmail()
  @Validate(IsUserAlreadyExist, ['email'], {
    message: 'User with email $value already exists.'
  })
  public readonly email: String;

  @IsNotEmpty()
  @Length(6, 20)
  public readonly password: String;

  @IsNotEmpty()
  @Length(6, 20)
  public readonly confirmPassword: string;

  @IsNotEmpty()
  @IsString({ always: true })
  @Length(2, 20)
  @Validate(IsUserAlreadyExist, ['fullName'], {
    message: 'User $value already exists. Choose another name.'
  })
  public readonly fullName: String;
}
