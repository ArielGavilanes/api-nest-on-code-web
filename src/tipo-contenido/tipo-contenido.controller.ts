import { Controller, Get } from '@nestjs/common';
import { ContenidoService } from './tipo-contenido.service';
import { TipoContenido } from './interface/tipo-contenido.interface';

@Controller('tipo_contenido')
export class ContenidoController {
  constructor(private contenidoService: ContenidoService) {}

  @Get('')
  async getAllContenido(): Promise<TipoContenido[]> {
    return await this.contenidoService.getAllContenidos();
  }
}
