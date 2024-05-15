import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cursos } from './entity/cursos.entity';
import { Repository } from 'typeorm';
import { Curso } from './interface/cursos.interface';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Cursos) private cursosRepository: Repository<Cursos>,
  ) {}

  async getCourseById(id_curso): Promise<Curso> {
    const courseFound = await this.cursosRepository.findOneBy({
      id_curso: id_curso,
    });
    return courseFound;
  }
}
