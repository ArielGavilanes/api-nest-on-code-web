import { IsDate, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class MatriculasDto {
  @IsOptional()
  @IsNumber({}, { message: 'El id_matricula debe ser un número.' })
  id_matricula?: number;

  @IsOptional()
  @IsDate({ message: 'La fecha de matriculación debe ser una fecha válida.' })
  @Type(() => Date)
  matriculado_a?: Date;

  @IsNotEmpty({ message: 'El id del curso es obligatorio.' })
  @IsNumber({}, { message: 'El id del curso debe ser un número.' })
  id_curso: number;

  @IsOptional()
  @IsNumber({}, { message: 'El id del estudiante debe ser un número.' })
  id_estudiante: number;
}
