import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async findUserByUsername(nombre_usuario: string): Promise<User> {
    const userFound = await this.usersRepository.findOne({
      where: { nombre_usuario: nombre_usuario },
      relations: ['id_rol'],
    });

    if (!userFound) {
      throw new NotFoundException();
    }

    return userFound;
  }
  async findUserByUsernameForRegister(nombre_usuario: string): Promise<User> {
    const userFound = await this.usersRepository.findOne({
      where: { nombre_usuario: nombre_usuario },
      relations: ['id_rol'],
    });

    return userFound;
  }

  async findUserForLogin(nombre_usuario: string): Promise<any> {
    const userFound = await this.usersRepository.findOne({
      where: { nombre_usuario: nombre_usuario },
      relations: ['id_rol'],
    });

    return userFound;
  }

  async createUser(user: Partial<UserDto>) {
    const newUser = await this.usersRepository.save(user);
    return newUser.id_usuario;
  }

  async findUserById(id_usuario: number): Promise<any> {
    const user = await this.usersRepository.findOne({
      where: { id_usuario: id_usuario },
      relations: ['id_rol'],
    });

    if (!user) {
      throw new NotFoundException('Usuario no existente');
    }

    return user;
  }
}
