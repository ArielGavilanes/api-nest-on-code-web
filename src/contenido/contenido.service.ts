import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contenido } from './entity/contenido.entity';
import { Repository } from 'typeorm';
import { ContenidoDto } from './dto/contenido.dto';

@Injectable()
export class ContenidoService {
  constructor(
    @InjectRepository(Contenido)
    private contenidosRepository: Repository<Contenido>,
  ) {}

  async createContent(content: ContenidoDto): Promise<any> {
    try {
      if (content.imagen_contenido) {
        content.imagen_contenido = Buffer.from(content.imagen_contenido.buffer);
      }
      const newContent = await this.contenidosRepository.create(content);
      return await this.contenidosRepository.save(newContent);
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async getContentFromACourseById(id_curso): Promise<any> {
    const content = await this.contenidosRepository.findBy({
      id_curso: id_curso,
    });

    if (!content) {
      throw new NotFoundException();
    }
    return content;
  }
}
