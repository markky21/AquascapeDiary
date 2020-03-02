import { Inject, Injectable } from '@nestjs/common';
import { ClientResponse } from '@sendgrid/client/src/response';
import { ResponseError } from '@sendgrid/helpers/classes';
import { MailData } from '@sendgrid/helpers/classes/mail';
import * as SendGrid from '@sendgrid/mail';
import * as deepmerge from 'deepmerge';
import { SendGridConstants } from './sendgrid.constants';
import { SendGridModuleOptions } from './sendgrid.interfaces';
import { logger } from './sendgrid.logger';

@Injectable()
export class SendGridService {
  public constructor(
    @Inject(SendGridConstants.SENDGRID_MODULE_OPTIONS)
    private readonly options: SendGridModuleOptions
  ) {
    if (!(options && options.apikey)) {
      logger.error('options not found. Did you use SendGridModule.forRoot?');
      return;
    }

    // SendGrid.setApiKey(options.apikey);
    SendGrid.setApiKey(options.apikey);

    console.log('options.apikey: ', options.apikey);
    logger.log('Set API Key');

    if (
      options.substitutionWrappers &&
      options.substitutionWrappers.left &&
      options.substitutionWrappers.right
    ) {
      SendGrid.setSubstitutionWrappers(
        options.substitutionWrappers.left,
        options.substitutionWrappers.right
      );
      logger.log('Set Substitution Wrappers');
    }
  }

  public async send(
    data: Partial<MailData> | Partial<MailData>[],
    isMultiple?: boolean,
    cb?: (err: Error | ResponseError, result: [ClientResponse, {}]) => void
  ): Promise<[ClientResponse, {}]> {
    if (Array.isArray(data)) {
      return SendGrid.send(
        data.map(d => this.mergeWithDefaultMailData(d)) as MailData[],
        isMultiple,
        cb
      );
    } else {
      return SendGrid.send(this.mergeWithDefaultMailData(data), isMultiple, cb);
    }
  }

  public async sendMultiple(
    data: Partial<MailData>,
    cb?: (error: Error | ResponseError, result: [ClientResponse, {}]) => void
  ): Promise<[ClientResponse, {}]> {
    return SendGrid.sendMultiple(
      this.mergeWithDefaultMailData(data) as MailData,
      cb
    );
  }

  private mergeWithDefaultMailData(data: Partial<MailData>): MailData {
    if (!this.options.defaultMailData) {
      return data as MailData;
    }
    return deepmerge(this.options.defaultMailData, data);
  }
}
