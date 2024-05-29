import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Matriculas } from './entity/matriculas.entity';

@Injectable()
export class MatriculasService {
  constructor(
    @InjectRepository(Matriculas)
    private matriculasRepository: Repository<Matriculas>,
  ) {}

  async createMatricula(matricula: any): Promise<any> {
    const nuevaMatricula = this.matriculasRepository.create(matricula);
    return await this.matriculasRepository.save(nuevaMatricula);
  }

  async getCoursesWhereStudentsAreMatriculatedIn(id_estudiante): Promise<any> {
    return await this.matriculasRepository.find({
      where: { id_estudiante: { id_usuario: id_estudiante } },
      relations: ['id_curso'],
    });
  }
}
