import { User } from '../../interfaces/users.model';
import { MailSenderServiceInterface } from './mail-sender.service';

export class MailSenderServiceStub implements MailSenderServiceInterface {
  public sendAuthRegister(user: User): Promise<User> {
    return Promise.resolve(null);
  }

  public sendAuthRequestPassword(user: User): Promise<User> {
    return Promise.resolve(null);
  }
}
