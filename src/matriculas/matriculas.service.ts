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

  async crearMatricula(matricula: Matriculas): Promise<any> {
    const nuevaMatricula = this.matriculasRepository.create(matricula);
    return await this.matriculasRepository.save(nuevaMatricula);
  }
}
