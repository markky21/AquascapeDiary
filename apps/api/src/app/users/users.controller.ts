import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  public constructor(private usersService: UsersService) {}

  @Get('findAll')
  public getProfile() {
    return this.usersService.findAll();
  }
}
