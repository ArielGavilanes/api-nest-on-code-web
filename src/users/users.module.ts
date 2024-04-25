import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { RolesModule } from '../roles/roles.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [RolesModule],
})
export class UsersModule {}

