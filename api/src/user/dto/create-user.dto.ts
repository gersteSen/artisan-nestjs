import { ApiProperty } from '@nestjs/swagger';
import { UserState } from '../entities/user.entity';
import { IsDateString, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty()
  @IsNotEmpty()
  familyname: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({ nullable: true })
  @IsDateString()
  birthday: string;

  @ApiProperty({ nullable: true })
  @IsNumber()
  datevMaNumber: number;

  @ApiProperty({ nullable: true })
  @IsNumber()
  sollArbeitszeit: number;

  @ApiProperty({ nullable: true })
  @IsNumber()
  wochenarbeitstage: number;

  @ApiProperty({ nullable: true })
  @IsNumber()
  urlaubstage: number;

  @ApiProperty({ nullable: true })
  @IsDateString()
  eintrittsdatum: Date;

  @ApiProperty({ nullable: true })
  @IsDateString()
  austrittsdatum: Date;

  @ApiProperty({ enum: UserState, default: UserState.ACTIVE })
  state?: UserState;
}
