import { Test, TestingModule } from '@nestjs/testing';

import { MongooseModule } from '@nestjs/mongoose';
import { ModelsMocksArray } from '../../mocks/mongoose.model.mocks';
import { UserSchema } from './user.schema';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [...ModelsMocksArray, UsersService]
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
