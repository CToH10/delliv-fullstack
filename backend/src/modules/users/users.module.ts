import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/database/prisma.service';
import { UserRepository } from './repositories/user.repository';
import { UserPrismaRepository } from './repositories/prisma/user.prisma.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, {provide: UserRepository, useClass: UserPrismaRepository
  }],
  exports: [UsersService]
})
export class UsersModule {}
