import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class UserDto {
  @IsOptional()
  @IsNumber({}, { message: 'El id_usuario debe ser un número.' })
  id_usuario?: number;

  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio.' })
  @IsString({
    message: 'El nombre de usuario debe ser una cadena de caracteres.',
  })
  nombre_usuario: string;

  @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
  @IsString({ message: 'La contraseña debe ser una cadena de caracteres.' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres.' })
  contrasena_usuario: string;

  @IsNotEmpty({ message: 'El estado de actividad es obligatorio.' })
  @IsBoolean({ message: 'El estado de actividad debe ser un valor booleano.' })
  es_activo: boolean;
}
