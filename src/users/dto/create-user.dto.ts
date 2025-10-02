import {
  IsString,
  IsEmail,
  IsOptional,
  IsEnum,
  MinLength,
  IsPhoneNumber,
} from 'class-validator';
import { UserRole } from '@prisma/client';
export class CreateUserDto {
  @IsOptional()
  @IsString()
  businessName?: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber(null)
  phone: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole; 
}
