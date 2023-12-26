import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JWTAuthGuard } from 'src/auth/jwt.auth.guard';
import { AdminGuard } from 'src/auth/admin.auth.guard';

@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @ApiBearerAuth()
  @UseGuards(JWTAuthGuard)
  @Post(':username')
  create(@Body() createAddressDto: CreateAddressDto, @Param('username') username: string) {
    return this.addressService.create(createAddressDto, username);
  }

  @UseGuards(JWTAuthGuard, AdminGuard)
  @Get()
  findAll() {
    return this.addressService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(JWTAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressService.findOne(id);
  }


  @ApiBearerAuth()
  @UseGuards(JWTAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.update(id, updateAddressDto);
  }

  @ApiBearerAuth()
  @UseGuards(JWTAuthGuard)
  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressService.remove(id);
  }
}
