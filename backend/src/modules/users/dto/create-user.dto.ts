import { ApiProperty } from '@nestjs/swagger';
import { Address } from '@prisma/client';
import { hashSync } from 'bcryptjs';
import { Transform, Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from 'src/modules/address/dto/create-address.dto';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  username: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(120)
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  fullName: string;

  @ApiProperty({ default: false })
  @IsBoolean()
  admin: boolean = false;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value), {
    groups: ['transform'],
  })
  password: string;

  @ApiProperty({ type: CreateAddressDto })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: Address;
}
