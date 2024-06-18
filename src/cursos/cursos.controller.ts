import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './interface/cursos.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { CursosDto } from './dto/cursos.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('cursos')
export class CursosController {
  constructor(private cursosService: CursosService) {}

  @Get('/categoria/:nombre_categoria')
  async getCoursesByCategoryName(
    @Param('nombre_categoria') nombre_categoria,
  ): Promise<any> {
    return this.cursosService.getCoursesByCategoryName(nombre_categoria);
  }

  @Get('search')
  async searchCourse(@Query('nombre_curso') nombre_curso) {
    return await this.cursosService.searchCourse(nombre_curso);
  }

  @Get(':id_curso')
  async getCourseById(@Param('id_curso') id_curso: number): Promise<Curso> {
    return this.cursosService.getCourseById(id_curso);
  }

  @Get('creador')
  @UseGuards(AuthGuard)
  async getCoursesByCreatorId(@Req() request) {
    const user = request.user;
    const id_creador = user.id_usuario;
    return await this.cursosService.getCoursesByCreatorId(id_creador);
  }

  @Post('')
  @UseInterceptors(FileInterceptor('portada_curso'))
  async createCurso(
    @UploadedFile() portada_curso: Express.Multer.File,
    @Body() curso: CursosDto,
  ): Promise<any> {
    curso.portada_curso = portada_curso;
    return await this.cursosService.createCourse(curso);
  }

  @Put(':id_curso')
  @UseInterceptors(FileInterceptor('portada_curso'))
  async updateCourse(
    @Body() curso: Partial<CursosDto>,
    @Param('id_curso') id_curso: number,
    @UploadedFile() portada_curso?: Express.Multer.File,
  ): Promise<any> {
    console.log(curso);
    if (portada_curso) {
      curso.portada_curso = portada_curso;
    }
    return await this.cursosService.updateCourse(curso, id_curso);
  }

  @Get('access/:id_curso')
  @UseGuards(AuthGuard)
  async verifyIfCreatorHavePermissions(
    @Req() request,
    @Param('id_curso', ParseIntPipe) id_curso: number,
  ) {
    const user = request.user;
    const id_creador = user.id_usuario;
    return await this.cursosService.verifyIfCreatorHavePermissions(
      id_creador,
      id_curso,
    );
  }

  @Post('/upload/image')
  async justUploadTheFuckingImage(): Promise<void> {}
}
