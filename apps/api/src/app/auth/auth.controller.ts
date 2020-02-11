import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { User } from '../../interfaces/users.model';
import { UserCreateDto } from '../users/dto/user-create.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  public async login(@Request() req) {
    console.log();
    return this.authService.login(req.user);
  }

  @Post('register')
  public async register(@Body() createUserDto: UserCreateDto): Promise<User> {
    return this.authService.register(createUserDto);
  }
}
