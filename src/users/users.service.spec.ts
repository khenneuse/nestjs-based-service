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
});
