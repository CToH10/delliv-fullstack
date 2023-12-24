import { Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressRepository } from './repositories/address.repository';

@Injectable()
export class AddressService {
  constructor(private addressRepository: AddressRepository){}
  create(createAddressDto: CreateAddressDto, username: string) {
    return this.addressRepository.create(createAddressDto, username);
  }

  findAll() {
    return `This function is not yet implemented`;
  }

  findOne(id: string) {
    return this.addressRepository.findOne(id);
  }

  update(id: string, updateAddressDto: UpdateAddressDto) {
    return this.addressRepository.update(id, updateAddressDto);
  }

  remove(id: string) {
    return this.addressRepository.delete(id);
  }
}
