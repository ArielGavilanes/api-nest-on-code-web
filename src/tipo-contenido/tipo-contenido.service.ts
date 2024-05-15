import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoContenido as Contenido } from './interface/tipo-contenido.interface';
import { TipoContenido } from './entity/tipo-contenido.entity';

@Injectable()
export class ContenidoService {
  constructor(
    @InjectRepository(TipoContenido)
    private contenidoRepository: Repository<TipoContenido>,
  ) {}

  async getAllContenidos(): Promise<Contenido[]> {
    const contenidosFound = await this.contenidoRepository.find();
    return contenidosFound;
  }
}
