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
    try {
      const newUserData = this.userDataRepository.create(userData);
      await this.userDataRepository.save(newUserData);
    } catch (error) {
      throw new BadRequestException();
    }
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
    const data = this.getUserDataById(id_usuario);

    if (!data) {
      throw new BadRequestException();
    }

    userData.foto_portada = Buffer.from(userData.foto_portada.buffer);
    return await this.userDataRepository.update(
      { id_usuario: id_usuario },
      userData,
    );
  }

  async updateUserDataProfile(id_usuario, userData): Promise<any> {
    const data = this.getUserDataById(id_usuario);

    if (!data) {
      throw new BadRequestException();
    }

    userData.foto_perfil = Buffer.from(userData.foto_perfil.buffer);
    return await this.userDataRepository.update(
      { id_usuario: id_usuario },
      userData,
    );
  }
}
