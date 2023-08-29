import {
  AfterLoad,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum UserState {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column()
  @ApiProperty()
  firstname: string;

  @Column()
  @ApiProperty()
  familyname: string;

  @Column()
  @ApiProperty()
  @Unique(['email'])
  email: string;

  @Column()
  @ApiProperty({ nullable: true })
  birthday: Date;

  @Column({ nullable: true })
  @ApiProperty()
  datevMaNumber: number;

  @Column({ nullable: true })
  @ApiProperty()
  sollArbeitszeit: number;

  @Column({ default: 5 })
  @ApiProperty({ default: 5 })
  wochenarbeitstage: number;

  @Column({ default: 25 })
  @ApiProperty({ default: 25 })
  urlaubstage: number;

  @Column({ nullable: true })
  @ApiProperty()
  eintrittsdatum: Date;

  @Column({ nullable: true })
  @ApiProperty()
  austrittsdatum: Date;

  @Column({ default: UserState.ACTIVE })
  @ApiProperty({ enum: UserState })
  state: UserState;
}
