import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository
    ){}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: string) {
    const found = this.userRepository.findOne(id);
    if (!found) {
      throw new NotFoundException('Usuário não encontrado')
    }

    return found
  }

  async findUnique(identifier: string) {
    const found = await this.userRepository.findUnique(identifier);
    if (!found) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return found;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const found = await this.userRepository.findOne(id);
    if (!found) {
      throw new NotFoundException('Usuário não encontrado')
    };

    return this.userRepository.update(id, updateUserDto)
  }

  async remove(id: string) {
    const found = await this.userRepository.findOne(id);
    if (!found) {
      throw new NotFoundException('Usuário não encontrado')
    }
    return this.userRepository.delete(id);
  }
}
