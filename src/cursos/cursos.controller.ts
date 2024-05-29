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
    @UploadedFile() portada_curso: Express.Multer.File,
    @Body() curso: Partial<CursosDto>,
    @Param('id_curso') id_curso: number,
  ): Promise<any> {
    if (portada_curso) {
      curso.portada_curso = portada_curso;
    }
    return await this.cursosService.updateCourse(curso, id_curso);
  }
}
