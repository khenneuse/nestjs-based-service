import { v4 as uuidV4 } from 'uuid';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAllUsers', () => {
    it(`should return an array of users`, () => {
      const allUsers = service.getAllUsers();
      expect(allUsers).toHaveLength(5);
    });
  });

  describe('getUserById', () => {
    it('should return a user if the id found', () => {
      const user = service.getUserById('9be28a4a-77af-4b65-91f4-088d5c0cd76b');
      expect(user).toBeDefined();
      expect(user.name).toBe('David');
    });
  });

  describe('addUser', () => {
    it('adds a user to the list of users', () => {
      const userId = uuidV4();
      const user = service.addUser('Jack Ryan', userId);
      expect(user).toBeDefined();

      const retrievedUser = service.getUserById(userId);
      expect(retrievedUser).toBeDefined();
      expect(retrievedUser.name).toBe('Jack Ryan');
    });

    it('adds a user with a new id if the id is not passed in', () => {
      const user = service.addUser('Bill the Cat');
      expect(user).toBeDefined();
      expect(user.id).toBeDefined();
      expect(user.name).toBe('Bill the Cat');
    });
  });
});
