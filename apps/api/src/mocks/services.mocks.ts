import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../app/auth/auth.service';
import { AuthServiceStub } from '../app/auth/auth.service.stub';
import { JwtStrategyService } from '../app/auth/jwt.strategy.service';
import { JwtStrategyServiceStub } from '../app/auth/jwt.strategy.service.stub';
import { LocalStrategyService } from '../app/auth/local.strategy.service';
import { LocalStrategyServiceStub } from '../app/auth/local.strategy.service.stub';
import { SendGridService } from '../app/send-grid/sendgrid.service';
import { SendGridServiceStub } from '../app/send-grid/sendgrid.service.stub';
import { MailSenderService } from '../app/services/mail-sender.service';
import { MailSenderServiceStub } from '../app/services/mail-sender.service.stub';
import { UsersService } from '../app/users/users.service';
import { UsersServiceStub } from '../app/users/users.service.stub';
import { JwtServiceStub } from './services/jwt-service.stub';

export const ServicesMocksArray = [
  // External
  { provide: JwtService, useClass: JwtServiceStub },

  // Internal
  { provide: AuthService, useClass: AuthServiceStub },
  { provide: JwtStrategyService, useClass: JwtStrategyServiceStub },
  { provide: LocalStrategyService, useClass: LocalStrategyServiceStub },
  { provide: MailSenderService, useClass: MailSenderServiceStub },
  { provide: SendGridService, useClass: SendGridServiceStub },
  { provide: UsersService, useClass: UsersServiceStub }
];
