import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
  Query,
  Request,
  Res,
  Response,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { User } from '../../interfaces/users.model';
import { UserCreateDto } from '../users/dto/user-create.dto';

import { STATUS_OK } from '../../api.config';
import { environment } from '../../environments/environment';
import { NeverService } from '../services/never.service';
import { UserNewPasswordDto } from '../users/dto/user-new-password.dto';
import { UserRequestPasswordDto } from '../users/dto/user-request-password.dto';
import { AUTH_PATHS, AuthStrategy } from './auth.config';
import { AuthService } from './auth.service';

@Controller(AUTH_PATHS.name)
export class AuthController {
  public constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard(AuthStrategy.JWT))
  @Get()
  public tempAuth(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard(AuthStrategy.LOCAL))
  @Post(AUTH_PATHS.auth.login.name)
  public async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post(AUTH_PATHS.auth.register.name)
  public async register(@Body() userCreateDto: UserCreateDto): Promise<User> {
    if (userCreateDto.password !== userCreateDto.confirmPassword) {
      const response = [
        {
          value: userCreateDto.confirmPassword,
          property: 'confirmPassword',
          children: [],
          constraints: {
            PasswordAndConfirmPasswordDontMatch: 'Password and confirm password do not match.'
          }
        }
      ];
      throw new HttpException(response, HttpStatus.BAD_REQUEST);
    }

    return this.authService.register(userCreateDto);
  }

  @Post(AUTH_PATHS.auth.logout.name)
  public logout(@Request() req, @Response() res) {
    req.logOut();
    res.send(STATUS_OK);
  }

  @Post(AUTH_PATHS.auth.requestPass.name)
  public requestPassword(@Body() userRequestPasswordDto: UserRequestPasswordDto, @Res() res): Promise<User> {
    this.authService.requestPassword(userRequestPasswordDto);
    return res.send(STATUS_OK);
  }

  @Get(AUTH_PATHS.auth.resetPassGet.name)
  public resetPassword(@Query('token') token: string, @Res() res): void {
    if (!token) {
      return;
    }

    return res.redirect(
      new URL(`${environment.urlForAngular}/auth/reset-password?reset_password_token=${token}`).toString()
    );
  }

  @Put(AUTH_PATHS.auth.resetPassPut.name)
  public storeNewPassword(@Body() userNewPasswordDto: UserNewPasswordDto, @Res() res) {
    if (userNewPasswordDto.password !== userNewPasswordDto.confirmPassword) {
      NeverService.ifPasswordAndConfirmPasswordDontMatch(userNewPasswordDto.confirmPassword.toString());
    }

    this.authService.setNewPassword(userNewPasswordDto);

    return res.send(STATUS_OK);
  }
}
