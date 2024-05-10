import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { HistoricalChangesInterceptor } from './interceptors/historical-changes/historical-changes.interceptor';

@Controller()
@UseInterceptors(HistoricalChangesInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  // that will take request data from request body and return a response.
  @Post()
  setCollection(collection: {
    name: string;
    email: string;
    password: string;
  }): {
    collection: {
      name: string;
      email: string;
      password: string;
    };
    message;
  } {
    return this.appService.setCollection(collection);
  }
}
