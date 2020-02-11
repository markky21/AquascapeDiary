import { Module, ValidationPipe } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserSchema } from './schemas/user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { IsUserAlreadyExist } from './validators/is-user-already-exist.validator';
import { IsUserValueExist } from './validators/is-user-value-exist.validator';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [
    UsersService,
    IsUserAlreadyExist,
    IsUserValueExist,
    ValidationPipe
  ],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
