import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { UsersDataModule } from 'src/users-data/users-data.module';

@Module({
  imports: [UsersModule, UsersDataModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
