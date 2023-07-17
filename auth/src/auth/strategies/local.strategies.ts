import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { User } from 'src/user/model/user.model';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  validate(email: string, password: string): User {
    console.log('validate', email, password);

    const user = this.authService.validate(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
