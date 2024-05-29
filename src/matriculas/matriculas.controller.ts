import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MatriculasService } from './matriculas.service';

@Controller('matriculas')
export class MatriculasController {
  constructor(private matriculasService: MatriculasService) {}

  @Post()
  async crearMatricula(@Body() matricula: any): Promise<any> {
    return this.matriculasService.createMatricula(matricula);
  }

  @Get('cursos/:id_estudiante')
  async getCoursesWhereStudentsAreMatriculatedIn(
    @Param('id_estudiante') id_estudiante,
  ) {
    return this.matriculasService.getCoursesWhereStudentsAreMatriculatedIn(
      id_estudiante,
    );
  }
}
