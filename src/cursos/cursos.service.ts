import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cursos } from './entity/cursos.entity';
import { Repository } from 'typeorm';
import { Curso } from './interface/cursos.interface';
import { CategoriasService } from 'src/categorias/categorias.service';

@Injectable()
export class CursosService {
  constructor(
    @InjectRepository(Cursos) private cursosRepository: Repository<Cursos>,
    private categoriasService: CategoriasService,
  ) {}

  async getCourseById(id_curso): Promise<Curso> {
    const courseFound = await this.cursosRepository.findOneBy({
      id_curso: id_curso,
    });
    return courseFound;
  }

  async getCoursesByCategoryName(nombre_categoria): Promise<any> {
    const id_categoria =
      await this.categoriasService.getIdFromCategoryName(nombre_categoria);

    const courseFound = await this.cursosRepository.findBy({
      id_categoria: id_categoria.id_categoria,
    });

    return courseFound;
  }
}
