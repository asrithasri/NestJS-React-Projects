import { Injectable } from '@nestjs/common';


export type User = {
    userId: number;
    username: string;
    password: string;
}

const users: User[] = [
    {
      userId: 1,
      username: 'john',
      password: 'topsecret',
    },
    {
      userId: 2,
      username: 'maria',
      password: '123abc',
    },
  ];

@Injectable()
export class UsersService {
    async findUserByName(username: string): Promise<User | undefined> {
        return users.find((user)=> user.username === username);
    }
}
