import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@ApiTags('Login')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  async login(@Body() user: LoginDto) {
    return this.authService.login(user.identifier);
  }
}
