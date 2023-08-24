import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {HelloDto} from "./dto/hello.dto";
import {ApiOkResponse, ApiTags} from "@nestjs/swagger";

@Controller()
@ApiTags('Beschaffung')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({type: HelloDto})
  getHello(): HelloDto {
    return this.appService.getHello();
  }
}
