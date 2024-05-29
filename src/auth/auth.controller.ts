import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  @UseInterceptors(
    FileInterceptor('foto_perfil'),
    // FileInterceptor('foto_portada'),
  )
  // @UseInterceptors(FileInterceptor('foto_portada'))
  async registerUser(
    @UploadedFile() foto_perfil: Express.Multer.File,
    // @UploadedFile() foto_portada: Express.Multer.File,
    @Body() user: RegisterDto,
  ): Promise<any> {
    user.foto_perfil = foto_perfil;
    // user.foto_portada = foto_portada;
    this.authService.registerUser(user);
  }

  @Post('login')
  async loginUser(@Body() userCredentials: LoginDto): Promise<any> {
    return this.authService.loginUser(userCredentials);
  }
}
