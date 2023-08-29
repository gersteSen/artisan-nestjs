import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber
} from 'class-validator';
import { UserState } from '../entities/user.entity';

export class UpdateUserDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  familyname: string;

  @ApiProperty({ required: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ nullable: true, required: false })
  @IsDateString()
  birthday?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  datevMaNumber?: number;

  @ApiProperty({ required: false })
  @IsNumber()
  sollArbeitszeit?: number;

  @ApiProperty({ default: 5, required: false })
  @IsNumber()
  wochenarbeitstage?: number;

  @ApiProperty({ default: 25, required: false })
  @IsNumber()
  urlaubstage?: number;

  @ApiProperty({ required: false })
  @IsDateString()
  eintrittsdatum?: Date;

  @ApiProperty({ required: false })
  @IsDateString()
  austrittsdatum?: Date;

  @ApiProperty({ enum: UserState, required: false })
  state?: UserState;
}
