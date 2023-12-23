import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'identifier',
      userpasswordField: 'password',
    });
  }

  validate(identifier: string, password: string) {
    const user = this.authService.validateUser(identifier, password);
    if (!user) {
      throw new UnauthorizedException('Identificador ou senha inválidos');
    }
    return user;
  }
}
