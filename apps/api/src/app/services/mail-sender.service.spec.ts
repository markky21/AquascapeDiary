import { Test, TestingModule } from '@nestjs/testing';
import { ServicesMocksArray } from '../../mocks/services.mocks';
import { MailSenderService } from './mail-sender.service';

describe('MailSenderService', () => {
  let service: MailSenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...ServicesMocksArray, MailSenderService]
    }).compile();

    service = module.get<MailSenderService>(MailSenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
