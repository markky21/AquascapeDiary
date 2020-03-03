import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { USER_PATHS } from './user.config';

@Controller(USER_PATHS.name)
export class UserController {
  @UseGuards(AuthGuard('jwt'))
  @Get(USER_PATHS.user.profile.name)
  public getProfile(@Request() req) {
    return req.user;
  }
}
