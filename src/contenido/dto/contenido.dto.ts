import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Cursos } from 'src/cursos/entity/cursos.entity';
import { TipoContenido } from 'src/tipo-contenido/entity/tipo-contenido.entity';

export class ContenidoDto {
  @IsOptional()
  @IsNumber({}, { message: 'El id_contenido debe ser un número.' })
  id_contenido?: number;

  @IsNotEmpty({
    message: 'El nombre de la sección del contenido es obligatorio.',
  })
  @IsString({
    message:
      'El nombre de la sección del contenido debe ser una cadena de caracteres.',
  })
  nombre_seccion_contenido: string;

  @IsNotEmpty({ message: 'La descripción del contenido es obligatoria.' })
  @IsString({
    message: 'La descripción del contenido debe ser una cadena de caracteres.',
  })
  descripcion_contenido: string;

  @IsOptional()
  @IsString({
    message: 'El texto del contenido debe ser una cadena de caracteres.',
  })
  texto_contenido?: string;

  @IsOptional()
  @IsString({
    message:
      'La URL del video del contenido debe ser una cadena de caracteres.',
  })
  url_video_contenido?: string;

  @IsOptional()
  imagen_contenido?: any;

  @IsNotEmpty({ message: 'El id del curso es obligatorio.' })
  @ValidateNested()
  @Type(() => Cursos)
  id_curso: Cursos;

  @IsNotEmpty({ message: 'El id del tipo de contenido es obligatorio.' })
  @ValidateNested()
  @Type(() => TipoContenido)
  id_tipo_contenido: TipoContenido;
}

//