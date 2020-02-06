import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { jwtModuleOptions } from '../../api.config';
import { UsersModule } from '../users/users.module';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategyService } from './jwt.strategy.service';
import { LocalStrategyService } from './local.strategy.service';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: true }),
    JwtModule.register(jwtModuleOptions)
  ],
  providers: [AuthService, LocalStrategyService, JwtStrategyService],
  controllers: [AuthController]
})
export class AuthModule {}
