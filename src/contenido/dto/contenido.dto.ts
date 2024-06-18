import { Cursos } from 'src/cursos/entity/cursos.entity';
import { TipoContenido } from 'src/tipo-contenido/entity/tipo-contenido.entity';

export class ContenidoDto {
  id_contenido?: number;
  nombre_seccion_contenido: string;
  descripcion_contenido: string;
  texto_contenido?: string;
  url_video_contenido?: string;
  imagen_contenido?: any;
  id_curso: Cursos;
  id_tipo_contenido: TipoContenido;
}
