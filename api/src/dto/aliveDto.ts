import { ApiProperty } from '@nestjs/swagger';

export enum AppStatus {
  DEVELOPMENT = 'DEVELOPMENT',
  PRODUCTION = 'PRODUCTION'
}

export class AliveDto {
  @ApiProperty()
  message: string;

  @ApiProperty({ enum: AppStatus })
  status: AppStatus;
}
