import { Controller, Get, Param, Query } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './interface/cursos.interface';

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
  async searchCursos(@Query('nombre_curso') nombre_curso) {
    return await this.cursosService.searchCursos(nombre_curso);
  }

  @Get(':id_curso')
  async getCourseById(@Param('id_curso') id_curso: number): Promise<Curso> {
    return this.cursosService.getCourseById(id_curso);
  }

  @Get('/creador/:userId')
  async getCursosPorUsuario(@Param('userId') userId: number) {
    return this.cursosService.getCoursesByUserId(userId);
  }
}
