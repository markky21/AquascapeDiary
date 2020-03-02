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

import { environment } from '../../environments/environment';
import { UserNewPasswordDto } from '../users/dto/user-new-password.dto';
import { UserRequestPasswordDto } from '../users/dto/user-request-password.dto';
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
    if (userCreateDto.password !== userCreateDto.confirmPassword) {
      const response = [
        {
          value: userCreateDto.confirmPassword,
          property: 'confirmPassword',
          children: [],
          constraints: {
            PasswordAndConfirmPasswordDontMatch:
              'Password and confirm password do not match.'
          }
        }
      ];
      throw new HttpException(response, HttpStatus.BAD_REQUEST);
    }

    return this.authService.register(userCreateDto);
  }

  @Post('logout')
  public logout(@Request() req, @Response() res) {
    req.logOut();
    res.send({ status: 'OK' });
  }

  @Post('request-pass')
  public requestPassword(
    @Body() userRequestPasswordDto: UserRequestPasswordDto,
    @Res() res
  ): Promise<User> {
    this.authService.requestPassword(userRequestPasswordDto);
    return res.send({ status: 'OK' });
  }

  @Get('reset-pass')
  public resetPassword(@Query('token') token: string, @Res() res): void {
    if (!token) {
      return;
    }

    return res.redirect(
      new URL(
        `${environment.urlForAngular}/auth/reset-password?reset_password_token=${token}`
      ).toString()
    );
  }

  @Put('reset-pass')
  public storeNewPassword(
    @Body() userNewPasswordDto: UserNewPasswordDto,
    @Res() res
  ) {
    if (userNewPasswordDto.password !== userNewPasswordDto.confirmPassword) {
      const response = [
        {
          value: userNewPasswordDto.confirmPassword,
          property: 'confirmPassword',
          children: [],
          constraints: {
            PasswordAndConfirmPasswordDontMatch:
              'Password and confirm password do not match.'
          }
        }
      ];
      throw new HttpException(response, HttpStatus.BAD_REQUEST);
    }

    this.authService.setNewPassword(userNewPasswordDto);

    return res.send({ status: 'OK' });
  }
}
