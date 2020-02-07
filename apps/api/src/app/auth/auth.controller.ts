import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  public async login(@Request() req) {
    return this.authService.login(req.user);
  }

  // @UseGuards(AuthGuard('local'))
  @Post('register')
  public async register(@Request() req) {
    console.log({ req });
    return this.authService.register(req.user).then(console.log);
  }
}
