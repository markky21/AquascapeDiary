import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User, UserLogged } from '../../interfaces/users.model';
import { EncryptService } from '../services/encrypt.service';
import { UserCreateDto } from '../users/dto/user-create.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  public constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService
  ) {}

  private static async comparePassword(
    user: User,
    password: string
  ): Promise<boolean> {
    return EncryptService.compare(password, `${user.password}`);
  }

  public async validateUser(
    email: string,
    reqPassword: string
  ): Promise<UserLogged> {
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
    return this.usersService.create(createUserDto);
  }
}
