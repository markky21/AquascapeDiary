import { Test, TestingModule } from '@nestjs/testing';

import { ServicesMocksArray } from '../../mocks/services.mocks';
import { UsersController } from './users.controller';

describe('Users Controller', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...ServicesMocksArray],
      controllers: [UsersController]
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
