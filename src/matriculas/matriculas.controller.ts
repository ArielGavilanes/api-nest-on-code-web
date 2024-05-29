import { Body, Controller, Post } from '@nestjs/common';
import { MatriculasService } from './matriculas.service';
import { Matriculas } from './entity/matriculas.entity';

@Controller('matriculas')
export class MatriculasController {
  constructor(private matriculasService: MatriculasService) {}

  @Post()
  async crearMatricula(@Body() matricula: Matriculas): Promise<any> {
    return this.matriculasService.crearMatricula(matricula);
  }
}
