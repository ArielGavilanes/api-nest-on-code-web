import { Body, Controller, Post } from '@nestjs/common';
import { MatriculasService } from './matriculas.service';

@Controller('matriculas')
export class MatriculasController {
  constructor(private matriculasService: MatriculasService) {}

  @Post()
  async crearMatricula(@Body() matricula: any): Promise<any> {
    return this.matriculasService.crearMatricula(matricula);
  }
}
