import { Injectable } from '@nestjs/common';
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
    if (content.imagen_contenido) {
      content.imagen_contenido = Buffer.from(content.imagen_contenido.buffer);
    }
    const newContent = await this.contenidosRepository.create(content);
    return await this.contenidosRepository.save(newContent);
  }

  async getContentFromACourseById(id_curso): Promise<any> {
    return await this.contenidosRepository.findBy({
      id_curso: id_curso,
    });
  }
}
