import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Categorias } from 'src/categorias/entity/categorias.entity';
import { Users } from 'src/users/entity/users.entity';

export class CursosDto {
  @IsOptional()
  @IsNumber({}, { message: 'El id_curso debe ser un número.' })
  id_curso?: number;

  @IsNotEmpty({ message: 'El nombre del curso es obligatorio.' })
  @IsString({
    message: 'El nombre del curso debe ser una cadena de caracteres.',
  })
  nombre_curso: string;

  @IsNotEmpty({ message: 'La descripción del curso es obligatoria.' })
  @IsString({
    message: 'La descripción del curso debe ser una cadena de caracteres.',
  })
  descripcion_curso: string;

  @IsNotEmpty({ message: 'Es necesario indicar si el curso es premium o no.' })
  @IsBoolean({ message: 'El campo premium_curso debe ser un valor booleano.' })
  premium_curso: boolean;

  @IsOptional()
  @IsNumber({}, { message: 'El precio del curso debe ser un número.' })
  precio_curso?: number;

  @IsOptional()
  portada_curso?: any;

  @IsNotEmpty({ message: 'El id del creador es obligatorio.' })
  @ValidateNested()
  @Type(() => Users)
  id_creador: Users;

  @IsNotEmpty({ message: 'El id de la categoría es obligatorio.' })
  @ValidateNested()
  @Type(() => Categorias)
  id_categoria: Categorias;
}
