import { Test } from '@nestjs/testing';
import { SendGridConstants } from './sendgrid.constants';
import { SendGridModuleOptions, SendGridModuleOptionsFactory } from './sendgrid.interfaces';
import { SendGridModule } from './sendgrid.module';

describe('SendGridModule', () => {
  describe('forRoot', () => {
    it('should throw error when no set apikey', () => {
      expect(() => {
        SendGridModule.forRoot({} as SendGridModuleOptions);
      }).toThrowError('SendGrid API Key is not defined');
    });

    it('should return DynamicModule', () => {
      expect(
        SendGridModule.forRoot({
          apikey: 'value'
        })
      ).toStrictEqual({
        module: SendGridModule,
        providers: [
          {
            provide: SendGridConstants.SENDGRID_MODULE_OPTIONS,
            useValue: {
              apikey: 'value'
            }
          }
        ]
      });
    });
  });
});
