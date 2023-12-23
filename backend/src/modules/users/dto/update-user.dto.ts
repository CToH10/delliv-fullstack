import {  ApiPropertyOptional } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import { IsString, IsOptional, MaxLength, IsEmail, IsBoolean, MinLength } from 'class-validator';

export class UpdateUserDto {
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    @MaxLength(120)
    username: string;
  
    @ApiPropertyOptional()
    @IsEmail()
    @IsOptional()
    @MaxLength(120)
    email: string;
  
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    @MaxLength(120)
    fullName: string;
  
    @ApiPropertyOptional({ default: false })
    @IsBoolean()
    admin: boolean = false; 
  
    @ApiPropertyOptional()
    @IsString()
    @IsOptional()
    @MinLength(8)
    @Transform(({ value }: { value: string }) => hashSync(value), {
      groups: ['transform'],
    })
    password: string;
  }
