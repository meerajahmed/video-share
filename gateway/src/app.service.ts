import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly clientAuthService: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  pingAuthService() {
    const startTs = Date.now();
    const pattern = 'ping';
    const payload = {};
    return this.clientAuthService.send<string>(pattern, payload).pipe(
      map((message: string) => ({
        message,
        duration: `${Date.now() - startTs}ms`,
      })),
    );
  }

  createUser(payload: any) {
    const pattern = 'createUser';
    return this.clientAuthService.send<string>(pattern, payload).pipe(
      map((message: string) => ({
        message,
      })),
    );
  }

  loginUser(payload: any) {
    const pattern = 'loginUser';
    return this.clientAuthService.send<string>(pattern, payload).pipe(
      map((message: string) => ({
        message,
      })),
    );
  }
}
