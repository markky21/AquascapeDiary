interface JwtService<T = any> {
  decode(token: string, options?: any): { [p: string]: any } | string | null;
  sign(payload: string | Buffer | object, options?: any): string;
  signAsync(payload: string | Buffer | object, options?: any): Promise<string>;
  verify(token: string, options?: any): T;
  verifyAsync(token: string, options?: any): Promise<T>;
}

export class JwtServiceStub implements JwtService {
  public decode(token: string, options?: any): { [p: string]: any } | string | null {
    return null;
  }

  public sign(payload: string | Buffer | object, options?: any): string {
    return '';
  }

  public signAsync(payload: string | Buffer | object, options?: any): Promise<string> {
    return Promise.resolve(null);
  }

  public verify(token: string, options?: any): any {}

  public verifyAsync(token: string, options?: any): Promise<any> {
    return Promise.resolve(null);
  }
}
