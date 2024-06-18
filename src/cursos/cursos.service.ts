import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cursos } from './entity/cursos.entity';
import { Like, Repository } from 'typeorm';
import { Curso } from './interface/cursos.interface';
import { CategoriasService } from 'src/categorias/categorias.service';
import { CursosDto } from './dto/cursos.dto';

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
    if (!courseFound) {
      throw new BadRequestException();
    }
    return courseFound;
  }

  async getCoursesByCategoryName(nombre_categoria): Promise<any> {
    const id_categoria =
      await this.categoriasService.getIdFromCategoryName(nombre_categoria);

    const courseFound = await this.cursosRepository.findBy({
      id_categoria: id_categoria.id_categoria,
    });

    if (!courseFound) {
      throw new BadRequestException();
    }

    return courseFound;
  }

  async getCoursesByCreatorId(id_creador: number): Promise<any> {
    const cursos = await this.cursosRepository.find({
      where: { id_creador: { id_usuario: id_creador } },
    });

    if (!cursos) {
      throw new BadRequestException();
    }
    return cursos;
  }

  async searchCourse(nombre_curso: string): Promise<any> {
    const foundedCursos = await this.cursosRepository.find({
      where: {
        nombre_curso: Like(`%${nombre_curso}%`),
      },
    });

    if (!foundedCursos) {
      throw new BadRequestException();
    }
    return foundedCursos;
  }

  async createCourse(curso: CursosDto): Promise<any> {
    curso.portada_curso = Buffer.from(curso.portada_curso.buffer);
    const newCourse = await this.cursosRepository.create(curso);
    return this.cursosRepository.save(newCourse);
  }

  async updateCourse(
    curso: Partial<CursosDto>,
    id_curso: number,
  ): Promise<any> {
    const cursoFound = await this.getCourseById(id_curso);
    if (!cursoFound) {
      throw new NotFoundException();
    }
    if (curso.portada_curso) {
      curso.portada_curso = Buffer.from(curso.portada_curso.buffer);
    }

    return await this.cursosRepository.update(id_curso, curso);
  }

  async verifyIfCreatorHavePermissions(id_creador, id_curso) {
    const course = await this.cursosRepository.findOne({
      where: {
        id_creador: { id_usuario: id_creador },
        id_curso: id_curso,
      },
    });

    if (course) {
      return true;
    }

    return false;
  }
}
