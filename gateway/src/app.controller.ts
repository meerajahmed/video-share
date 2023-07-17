import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/auth/ping')
  pingAuthService() {
    return this.appService.pingAuthService();
  }

  @Post('/auth/sign-up')
  createUser(@Body() body: any) {
    return this.appService.createUser(body);
  }

  @Post('/auth/sign-in')
  signIn(@Body() body: any) {
    return this.appService.loginUser(body);
  }
}
