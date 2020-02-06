import { MONGO_DB_URL } from '@aquascape-diary/secrets';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    UsersModule,
    MongooseModule.forRoot(MONGO_DB_URL)
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
