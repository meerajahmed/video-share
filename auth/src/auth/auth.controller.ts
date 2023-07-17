import { Controller, UseGuards } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('createAuth')
  create(@Payload() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @MessagePattern('findAllAuth')
  findAll() {
    return this.authService.findAll();
  }

  @MessagePattern('findOneAuth')
  findOne(@Payload() id: number) {
    return this.authService.findOne(id);
  }

  @MessagePattern('updateAuth')
  update(@Payload() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(updateAuthDto.id, updateAuthDto);
  }

  @MessagePattern('removeAuth')
  remove(@Payload() id: number) {
    return this.authService.remove(id);
  }

  @UseGuards(LocalAuthGuard)
  @MessagePattern('loginUser')
  login(@Payload() data: any) {
    console.log(`----------LocalAuthGuard`, data);
    return this.authService.login(data);
  }
}