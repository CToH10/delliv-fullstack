import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private useService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(id: string, password: string) {
    const user = await this.useService.findUnique(id);

    if (user) {
      const passwordMatch = await compare(password, user.password);
      if (passwordMatch) {
        const { id, email } = user;
        return { id, email };
      }
    }
    return null;
  }

  async login(identifier: string) {
    const user = await this.useService.findUnique(identifier);
    return {
      token: this.jwtService.sign({ identifier , admin: user.admin}, { subject: user.id }),
    };
  }
}
