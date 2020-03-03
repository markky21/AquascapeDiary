import { Controller, Get } from '@nestjs/common';
import { USERS_PATHS } from './users.config';
import { UsersService } from './users.service';

@Controller(USERS_PATHS.name)
export class UsersController {
  public constructor(private usersService: UsersService) {}

  @Get(USERS_PATHS.users.findAll.name)
  public getProfile() {
    return this.usersService.findAll();
  }
}
