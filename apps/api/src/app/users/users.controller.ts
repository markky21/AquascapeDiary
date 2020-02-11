import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from './users.service';
import { UserCreateDto } from './dto/user-create.dto';

@Controller('users')
export class UsersController {
  public constructor(private usersService: UsersService) {}


  @Get('findAll')
  public getProfile() {
    return this.usersService.findAll();
  }
}
