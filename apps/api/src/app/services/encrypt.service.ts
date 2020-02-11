import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptService {
  private static hashRounds = 12;

  public static async hash(data: string | String): Promise<string> {
    return bcrypt.hash(data, this.hashRounds);
  }

  public static async compare(data: string, hash: string): Promise<boolean> {
    return bcrypt.compare(data, hash);
  }
}
