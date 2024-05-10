import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { historicalUser } from '../../models/historicalUser';

@Injectable()
export class HistoricalChangesInterceptor implements NestInterceptor {
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    // Logic to capture changes made to fields in the collection
    console.log('Capturing historical changes...');

    // You can access the request, response, user, etc. from the ExecutionContext
    const request = context.switchToHttp().getRequest();

    try {
      await historicalUser.create({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
      });
    } catch (error) {
      throw new Error('Failed to add user data.');
    }

    // Execute the next middleware/handler
    return next.handle().pipe(
      map((data) => {
        // Perform any post-processing if needed
        console.log('Changes captured successfully.');
        return data;
      }),
    );
  }
}
