import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  public constructor(private usersService: UsersService) {}

  @Get('findAll')
  public getProfile() {
    return this.usersService.findAll();
  }
}
