import { Injectable } from '@nestjs/common';
import { User } from './models/user';

@Injectable()
export class AppService {
  constructor(private readonly userModel: typeof User) {}
  // setCollection() take a object collection as parameter and return a object with collection name and fields
  async setCollection(collection: {
    name: string;
    email: string;
    password: string;
  }): Promise<{
    collection: {
      name: string;
      email: string;
    };
    message;
  }> {
    try {
      // Insert user data into User table
      const newUser = await this.userModel.create({
        name: collection.name,
        email: collection.email,
        password: collection.password,
      });

      return {
        collection: {
          name: newUser.name,
          email: newUser.email,
        },
        message: 'User data added successfully.',
      };
    } catch (error) {
      throw new Error('Failed to add user data.');
    }
  }
}
