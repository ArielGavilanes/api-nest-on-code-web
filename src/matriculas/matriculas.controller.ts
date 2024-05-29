import { Controller, Get, Param } from '@nestjs/common';
import { MatriculasService } from './matriculas.service';
import { Curso } from 'src/cursos/interface/cursos.interface';

@Controller('matriculas')
export class MatriculasController {
  constructor(private readonly matriculasService: MatriculasService) {}
}
