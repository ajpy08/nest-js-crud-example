import { Get, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class UsersService {
  private users: User[] = [];

  insertUser(name: string, age: number, surname: string, email: string) {
    const id = uuidV4();
    const newUser = new User(id, name, age, surname, email);
    this.users.push(newUser);
    return id;
  }

  getUsers() {
    return [...this.users];
  }
}
