import { Controller, Get, Param } from '@nestjs/common';
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

  @Get(':id_curso')
  async getCourseById(@Param('id_curso') id_curso: number): Promise<Curso> {
    return this.cursosService.getCourseById(id_curso);
  }
}
