import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { LoanApplicationsService } from './loan-applications/loan-applications.service';
import { LoanApplicationsController } from './loan-applications/loan-applications.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, LoanApplicationsController],
  providers: [AppService, UsersService, LoanApplicationsService],
})
export class AppModule {}
