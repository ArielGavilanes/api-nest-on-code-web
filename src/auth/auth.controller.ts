import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { LoginDto } from './dto/login.dto';
// import { Auth } from './decorators/auth.decorator';
import { AuthGuard } from './guards/auth.guard';

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
  @HttpCode(200)
  async loginUser(@Body() userCredentials: LoginDto): Promise<any> {
    return this.authService.loginUser(userCredentials);
  }

  @Get('profile')
  //@Auth() TODO: Cambiar tras ajustar la logica de decorador
  @UseGuards(AuthGuard)
  async profile(@Req() request): Promise<any> {
    const user = request.user;
    const nombre_usuario = user.nombre_usuario;
    return await this.authService.getProfile(nombre_usuario);
  }
}
