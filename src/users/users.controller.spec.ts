import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('/users', () => {
    it('should get all the users', () => {
      const users = controller.getAllUsers();
      expect(users).toHaveLength(5);
    });
  });

  describe('/users/id', () => {
    it('should get a specific user if id found', () => {
      const user = controller.getUserById(
        'fb414ddc-6e3b-4859-bb45-56d7389a64ba',
      );
      expect(user).toBeDefined();
      expect(user.name).toBe('Adam');
    });

    it('should return undefined if the id is not found', () => {
      expect(controller.getUserById('BOGUS')).toBeUndefined();
    });
  });
});
