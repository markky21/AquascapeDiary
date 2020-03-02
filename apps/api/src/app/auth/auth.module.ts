import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { jwtModuleOptions } from '../../api.config';
import { UserModule } from '../user/user.module';
import { UsersModule } from '../users/users.module';

import { MailSenderService } from '../services/mail-sender.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategyService } from './jwt.strategy.service';
import { LocalStrategyService } from './local.strategy.service';

@Module({
  imports: [
    UsersModule,
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: true }),
    JwtModule.register(jwtModuleOptions)
  ],
  providers: [
    AuthService,
    LocalStrategyService,
    JwtStrategyService,
    MailSenderService
  ],
  controllers: [AuthController]
})
export class AuthModule {}
