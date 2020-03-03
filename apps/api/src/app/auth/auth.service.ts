import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as crypto from 'crypto';
import {  RESET_TOKEN_EXPIRATION_TIME } from '../../api.config';
import { User, UserLogged } from '../../interfaces/users.model';
import { EncryptService } from '../services/encrypt.service';
import { MailSenderService } from '../services/mail-sender.service';
import { NeverService } from '../services/never.service';
import { UserCreateDto } from '../users/dto/user-create.dto';
import { UserNewPasswordDto } from '../users/dto/user-new-password.dto';
import { UserRequestPasswordDto } from '../users/dto/user-request-password.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  public constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
    private mailSenderService: MailSenderService
  ) {}

  private static async comparePassword(user: User, password: string): Promise<boolean> {
    return EncryptService.compare(password, `${user.password}`);
  }

  public async validateUser(email: string, reqPassword: string): Promise<UserLogged> {
    const user = await this.usersService.findOne({ email });

    if (!user) {
      return;
    }

    return AuthService.comparePassword(user, reqPassword).then(success => {
      if (success) {
        const { password, ...result } = JSON.parse(JSON.stringify(user));
        return result;
      }
    });
  }

  public async login(user: UserLogged) {
    const payload = { username: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
      ...user
    };
  }

  public async register(createUserDto: UserCreateDto): Promise<User> {
    return this.usersService.create(createUserDto).then(user => this.mailSenderService.sendAuthRegister(user));
  }

  public async requestPassword(userRequestPasswordDto: UserRequestPasswordDto): Promise<User> {
    const resetToken = await this.createToken();
    const filter = { email: userRequestPasswordDto.email };

    return this.usersService.getModel
      .findOneAndUpdate(
        filter,
        {
          resetToken: resetToken,
          resetTokenExpiration: Date.now() + RESET_TOKEN_EXPIRATION_TIME
        },
        { new: true }
      )
      .then(user => this.mailSenderService.sendAuthRequestPassword(user));
  }

  public async setNewPassword(userNewPasswordDto: UserNewPasswordDto): Promise<User> {
    return EncryptService.hash(userNewPasswordDto.password).then(password => {
      return this.usersService.getModel.findOneAndUpdate(
        {
          resetToken: userNewPasswordDto.reset_password_token,
          resetTokenExpiration: { $gt: Date.now() }
        },
        { password },
        { new: true }
      );
    });
  }

  public async createToken(): Promise<string> {
    return new Promise(resolve => {
      crypto.randomBytes(32, (err, buffer) => {
        if (err) {
          NeverService.general500();
        }
        resolve(buffer.toString('hex'));
      });
    });
  }
}
