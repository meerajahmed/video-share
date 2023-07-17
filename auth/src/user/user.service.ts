import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './model/user.model';

let uid = 1000;

@Injectable()
export class UserService {
  private users: User[] = [
    { id: 1000, name: 'John', email: 'john@test.com', password: 'mypassword' },
  ];

  create(createUserDto: CreateUserDto): User {
    return {
      id: ++uid,
      ...createUserDto,
    };
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  findByEmail(email: string): User | null {
    return this.users.find((user) => user.email === email) || null;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.users.find((user) => user.id === id);
    Object.assign(user, updateUserDto);
  }

  remove(id: number): User {
    const userIndex = this.users.findIndex((user) => user.id === id);
    const user = this.users.splice(userIndex, 1);
    return user[0];
  }
}
