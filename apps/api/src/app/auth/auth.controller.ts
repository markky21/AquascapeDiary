import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { User } from '../../interfaces/users.model';
import { UserCreateDto } from '../users/dto/user-create.dto';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  public tempAuth(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  public async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('register')
  public async register(@Body() userCreateDto: UserCreateDto): Promise<User> {
    return this.authService.register(userCreateDto);
  }

  @Get('logout')
  public logout(): void {
    return;
  }

  @Get('request-password')
  public requestPassword(): void {
    return;
  }

  @Get('reset-password')
  public resetPassword(): void {
    return;
  }
}
