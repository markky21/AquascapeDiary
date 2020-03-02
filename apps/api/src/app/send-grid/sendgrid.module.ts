import { DynamicModule, Global, Module } from '@nestjs/common';
import { SendGridConstants } from './sendgrid.constants';
import { SendGridModuleOptions } from './sendgrid.interfaces';
import { SendGridService } from './sendgrid.service';

@Global()
@Module({
  providers: [SendGridService],
  exports: [SendGridService]
})
export class SendGridModule {
  public static forRoot(options: SendGridModuleOptions): DynamicModule {
    if (!(options && options.apikey)) {
      throw new Error('SendGrid API Key is not defined');
    }

    return {
      module: SendGridModule,
      providers: [
        {
          provide: SendGridConstants.SENDGRID_MODULE_OPTIONS,
          useValue: options
        }
      ]
    };
  }
}
