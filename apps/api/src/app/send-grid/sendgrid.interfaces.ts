import { MailData } from '@sendgrid/helpers/classes/mail';

export interface SendGridModuleOptions {
  apikey: string;
  /**
   * You can set default data
   */
  defaultMailData?: MailData;
  substitutionWrappers?: { left: string; right: string };
}

export interface SendGridModuleOptionsFactory {
  createSendGridModuleOptions():
    | Promise<SendGridModuleOptions>
    | SendGridModuleOptions;
}
