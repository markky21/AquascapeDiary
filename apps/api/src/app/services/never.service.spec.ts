import { Test, TestingModule } from '@nestjs/testing';
import { NeverService } from './never.service';

describe('NeverService', () => {
  let service: NeverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeverService]
    }).compile();

    service = module.get<NeverService>(NeverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
