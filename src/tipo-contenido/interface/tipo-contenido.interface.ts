import { TipoContenidoEnum } from 'src/common/enum/tipo-contenido.enum';

export interface TipoContenido {
  id_tipo_contenido: number;
  nombre_tipo_contenido: TipoContenidoEnum;
}
