import { v4 as uuidV4 } from 'uuid';
import { Injectable } from '@nestjs/common';

export interface UserDTO {
  id: string;
  name: string;
}
@Injectable()
export class UsersService {
  private allUsers: UserDTO[] = [
    { id: 'fb414ddc-6e3b-4859-bb45-56d7389a64ba', name: 'Adam' },
    { id: '0c7c7cd5-058a-4fa1-8d91-f5364757a11c', name: 'Barry' },
    { id: '48f135fb-d7fb-4f47-b5bf-8824d8b6e525', name: 'Cindy' },
    { id: '9be28a4a-77af-4b65-91f4-088d5c0cd76b', name: 'David' },
    { id: '74856012-7e1d-11ec-82de-062205c32318', name: 'Ezra' },
  ];

  getAllUsers() {
    return this.allUsers;
  }

  getUserById(userId: string): UserDTO | undefined {
    return this.allUsers.find((user) => user.id === userId);
  }

  addUser(name: string, id: string = uuidV4()) {
    const user = { id, name };
    this.allUsers.push(user);
    return user;
  }
}
