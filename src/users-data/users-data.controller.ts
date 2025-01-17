import {
  Body,
  Controller,
  Put,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsersDataService } from './users-data.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('users-data')
export class UsersDataController {
  constructor(private userDataService: UsersDataService) {}

  @Put('cover')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('foto_portada'))
  async updateUserDataCover(
    @Body() userData: any,
    @Req() request,
    @UploadedFile() foto_portada: Express.Multer.File,
  ) {
    const user = request.user;
    const id_usuario = user.id_usuario;

    userData.foto_portada = foto_portada;

    return await this.userDataService.updateUserDataCover(id_usuario, userData);
  }
  @Put('profile')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('foto_perfil'))
  async updateUserDataProfile(
    @Body() userData: any,
    @Req() request,
    @UploadedFile() foto_perfil: Express.Multer.File,
  ) {
    const user = request.user;
    const id_usuario = user.id_usuario;

    userData.foto_perfil = foto_perfil;
    return await this.userDataService.updateUserDataProfile(
      id_usuario,
      userData,
    );
  }
}
