import {ApiProperty} from "@nestjs/swagger";

export enum HelloStatus {
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    WARNING = 'WARNING',
}

export class HelloDto{
    @ApiProperty()
    message: string;
    
    @ApiProperty({enum: HelloStatus})
    status: HelloStatus;
}