import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TiposContenido } from './interface/tipo-contenido.interface';
import { TipoContenido } from './entity/tipo-contenido.entity';

@Injectable()
export class TipoContenidoService {
  constructor(
    @InjectRepository(TipoContenido)
    private contenidoRepository: Repository<TipoContenido>,
  ) {}

  async getAllTiposContenido(): Promise<TiposContenido[]> {
    const tiposContenidosFound = await this.contenidoRepository.find();
    return tiposContenidosFound;
  }
}
