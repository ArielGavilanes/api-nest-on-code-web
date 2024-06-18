import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersData } from './entity/users-data.entity';

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

  async updateUserDataCover(id_usuario, userData): Promise<any> {
    userData.foto_portada = Buffer.from(userData.foto_portada.buffer);
    return await this.userDataRepository.update(
      { id_usuario: id_usuario },
      userData,
    );
  }

  async updateUserDataProfile(id_usuario, userData): Promise<any> {
    console.log(userData.foto_perfil.buffer);
    userData.foto_perfil = Buffer.from(userData.foto_perfil.buffer);
    return await this.userDataRepository.update(
      { id_usuario: id_usuario },
      userData,
    );
  }
}
