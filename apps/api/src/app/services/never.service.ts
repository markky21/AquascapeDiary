import { HttpException, HttpStatus } from '@nestjs/common';

export class NeverService {
  public static general500(): never {
    throw new HttpException('Upps.. Somethings went wrong!', HttpStatus.INTERNAL_SERVER_ERROR);
  }

  public static ifPasswordAndConfirmPasswordDontMatch(confirmPassword: string): never {
    const response = [
      {
        value: confirmPassword,
        property: 'confirmPassword',
        children: [],
        constraints: {
          PasswordAndConfirmPasswordDontMatch: 'Password and confirm password do not match.'
        }
      }
    ];
    throw new HttpException(response, HttpStatus.BAD_REQUEST);
  }
}
