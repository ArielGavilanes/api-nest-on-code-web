import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { UsersDataService } from 'src/users-data/users-data.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private usersDataService: UsersDataService,
  ) {}

  async registerUser(user: RegisterDto): Promise<void> {
    const userFound = await this.usersService.findUserByUsername(
      user.nombre_usuario,
    );

    if (userFound) {
      throw new BadRequestException('Usuario existente');
    }

    user.contrasena_usuario = await bcrypt.hash(user.contrasena_usuario, 10);

    const {
      id_usuario,
      nombre_usuario,
      contrasena_usuario,
      id_rol,
      id_data,
      email_usuario,
      nombre_usuario_real,
      apellido_usuario,
      foto_perfil,
    } = user;

    const newUser = {
      id_usuario: id_usuario,
      nombre_usuario: nombre_usuario,
      contrasena_usuario: contrasena_usuario,
      id_rol: id_rol,
    };

    const newUserId = await this.usersService.createUser(newUser);

    const newUserData = {
      id_data: id_data,
      email_usuario: email_usuario,
      nombre_usuario: nombre_usuario_real,
      apellido_usuario: apellido_usuario,
      foto_perfil: foto_perfil,
      id_usuario: newUserId,
    };

    await this.usersDataService.saveUserData(newUserData);
  }
}
