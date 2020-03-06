import { SendGridService } from '../app/send-grid/sendgrid.service';
import { SendGridServiceStub } from '../app/send-grid/sendgrid.service.stub';
import { MailSenderService } from '../app/services/mail-sender.service';
import { MailSenderServiceStub } from '../app/services/mail-sender.service.stub';
import { UsersService } from '../app/users/users.service';
import { UsersServiceStub } from '../app/users/users.service.stub';

export const ServicesMocksArray = [
  { provide: SendGridService, useClass: SendGridServiceStub },
  { provide: UsersService, useClass: UsersServiceStub },
  { provide: MailSenderService, useClass: MailSenderServiceStub }
  ];
