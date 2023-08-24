import { Injectable } from '@nestjs/common';
import {HelloDto, HelloStatus} from "./dto/hello.dto";

@Injectable()
export class AppService {
  getHello(): HelloDto {
    
    const helloDto = new HelloDto();
    helloDto.message = 'Hello World!';
    helloDto.status = HelloStatus.SUCCESS;
    
    return helloDto;
  }
}
