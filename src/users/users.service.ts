import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { Repository } from 'typeorm';
import { User } from './interface/users.interface';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async findUserByUsername(nombre_usuario: string): Promise<User> {
    const userFound = await this.usersRepository.findOneBy({
      nombre_usuario: nombre_usuario,
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
}
