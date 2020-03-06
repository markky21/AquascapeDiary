import { ClientResponse } from '@sendgrid/client/src/response';
import { ResponseError } from '@sendgrid/helpers/classes';
import { MailData } from '@sendgrid/helpers/classes/mail';
import { SendGridServiceInterface } from './sendgrid.service';

export class SendGridServiceStub implements SendGridServiceInterface {
  public send(
    data: Partial<MailData> | Partial<MailData>[],
    isMultiple?: boolean,
    cb?: (err: Error | ResponseError, result: [ClientResponse, {}]) => void
  ): Promise<[ClientResponse, {}]> {
    return Promise.resolve(null);
  }

  public sendMultiple(
    data: Partial<MailData>,
    cb?: (error: Error | ResponseError, result: [ClientResponse, {}]) => void
  ): Promise<[ClientResponse, {}]> {
    return Promise.resolve(null);
  }
}
