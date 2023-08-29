import { Injectable } from '@nestjs/common';
import { AliveDto, AppStatus } from './dto/aliveDto';

@Injectable()
export class AppService {
  getHello(): AliveDto {
    const helloDto = new AliveDto();
    helloDto.message = 'Hello World!';
    helloDto.status = AppStatus.DEVELOPMENT;

    return helloDto;
  }
}
