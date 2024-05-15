import { Controller, Get, Param } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './interface/cursos.interface';

@Controller('cursos')
export class CursosController {
  constructor(private cursosService: CursosService) {}

  @Get(':id_curso')
  async getCourseById(@Param('id_curso') id_curso: number): Promise<Curso> {
    return this.cursosService.getCourseById(id_curso);
  }
}
