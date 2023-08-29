export * from './app.service';
import { AppService } from './app.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [AppService, UserService];
