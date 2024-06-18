import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { MatriculasService } from './matriculas.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { MatriculasDto } from './dto/matriculas.dto';

@Controller('matriculas')
export class MatriculasController {
  constructor(private matriculasService: MatriculasService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createMatricula(
    @Body() matricula: MatriculasDto,
    @Req() request,
  ): Promise<any> {
    const user = request.user;
    const id_estudiante = user.id_usuario;
    const finallyMatricula = {
      ...matricula,
      id_estudiante: id_estudiante,
    };
    return this.matriculasService.createMatricula(finallyMatricula);
  }

  @Get('cursos')
  @UseGuards(AuthGuard)
  async getCoursesWhereStudentsAreMatriculatedIn(@Req() request): Promise<any> {
    const user = request.user;
    const id_estudiante = user.id_usuario;
    return this.matriculasService.getCoursesWhereStudentsAreMatriculatedIn(
      id_estudiante,
    );
  }

  @Get('estadistica')
  @UseGuards(AuthGuard)
  async getMatriculeOfTheLast3Days(@Req() request) {
    const user = request.user;
    const id_estudiante = user.id_usuario;
    return await this.matriculasService.getMatriculeOfTheLast3Days(
      id_estudiante,
    );
  }

  @Get('access/:id_curso')
  @UseGuards(AuthGuard)
  async verifyIfAStudentIsMatriculatedIn(
    @Param('id_curso', ParseIntPipe) id_curso: number,
    @Req() request,
  ): Promise<any> {
    const user = request.user;
    const id_estudiante = user.id_usuario;
    return await this.matriculasService.verifyIfAStudentIsMatriculatedIn(
      id_curso,
      id_estudiante,
    );
  }
}
