import { Test, TestingModule } from '@nestjs/testing';

import { ServicesMocksArray } from '../../mocks/services.mocks';
import { AuthController } from './auth.controller';

describe('Auth Controller', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...ServicesMocksArray],
      controllers: [AuthController]
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
