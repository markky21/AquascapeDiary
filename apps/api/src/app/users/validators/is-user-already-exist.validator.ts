import { Injectable } from '@nestjs/common';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

import { UsersService } from '../users.service';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUserAlreadyExist implements ValidatorConstraintInterface {
  public constructor(private usersService: UsersService) {}

  public async validate(value: string, args: ValidationArguments): Promise<boolean> {
    return this.usersService.findOne({ [args.constraints[0]]: value }).then(user => !user);
  }
}
