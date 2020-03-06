import { Injectable } from '@nestjs/common';
import { EMAIL_FROM } from '../../api.config';
import { environment } from '../../environments/environment';
import { User } from '../../interfaces/users.model';
import { SendGridService } from '../send-grid/sendgrid.service';

export interface MailSenderServiceInterface {
  sendAuthRegister(user: User): Promise<User>;
  sendAuthRequestPassword(user: User): Promise<User>;
}

@Injectable()
export class MailSenderService implements MailSenderServiceInterface {
  public constructor(private sendGridService: SendGridService) {}

  public async sendAuthRegister(user: User): Promise<User> {
    return this.sendGridService
      .send({
        to: user.email as string,
        from: EMAIL_FROM,
        subject: `Hallo ${user.fullName}! Welcome in AquascapeDiary :)`,
        text: 'You successfully signed up!',
        html: '<strong>You successfully signed up!</strong>'
      })
      .then(() => user);
  }

  public async sendAuthRequestPassword(user: User): Promise<User> {
    const resetLink = `${environment.urlForAngular}/api/auth/reset-pass/?token=${user.resetToken}`;
    return this.sendGridService
      .send({
        to: user.email as string,
        from: EMAIL_FROM,
        subject: `Hallo ${user.fullName}! Reset your password`,
        text: `Click here or copy and paste ling right bellow.
        ${resetLink}`,
        html: `Click <a href="${resetLink}"></a>here or copy and paste ling right bellow.
        ${resetLink}`
      })
      .then(() => user);
  }
}
