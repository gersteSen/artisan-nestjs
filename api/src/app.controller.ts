import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AliveDto } from './dto/aliveDto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ type: AliveDto })
  getHello(): AliveDto {
    return this.appService.getHello();
  }
}
