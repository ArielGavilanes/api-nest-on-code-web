import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './interface/cursos.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { CursosDto } from './dto/cursos.dto';

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

  @Get('/creador/:id_creador')
  async getCursosPorUsuario(@Param('id_creador') id_creador: number) {
    return this.cursosService.getCoursesByCreatorId(id_creador);
  }
}
