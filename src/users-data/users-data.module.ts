import { Module } from '@nestjs/common';
import { UsersDataService } from './users-data.service';
import { UsersDataController } from './users-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersData } from './entity/users-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersData])],
  providers: [UsersDataService],
  controllers: [UsersDataController],
  exports: [UsersDataService],
})
export class UsersDataModule {}
