import { Controller, Get } from '@nestjs/common';
import { TipoContenidoService } from './tipo-contenido.service';
import { TiposContenido } from './interface/tipo-contenido.interface';

@Controller('tipo_contenido')
export class TipoContenidoController {
  constructor(private tipoContenidoService: TipoContenidoService) {}

  @Get('')
  async getAllTiposContenido(): Promise<TiposContenido[]> {
    return await this.tipoContenidoService.getAllTiposContenido();
  }
}
