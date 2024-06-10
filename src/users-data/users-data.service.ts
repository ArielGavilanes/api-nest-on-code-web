import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersData } from './entity/users-data.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersDataService {
  constructor(
    @InjectRepository(UsersData)
    private userDataRepository: Repository<UsersData>,
  ) {}

  async saveUserData(userData): Promise<void> {
    const newUserData = this.userDataRepository.create(userData);
    await this.userDataRepository.save(newUserData);
  }

  async getUserDataById(id_usuario): Promise<any> {
    const userData = await this.userDataRepository.findOne({
      // relations: ['id_usuario'],
      where: { id_usuario: id_usuario },
    });

    if (!userData) {
      throw new BadRequestException('');
    }

    return userData;
  }
}
