import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsOptional()
  @IsNumber()
  id_usuario?: number;

  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio.' })
  @IsString({
    message: 'El nombre de usuario debe ser una cadena de caracteres.',
  })
  nombre_usuario: string;

  @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
  @IsString({ message: 'La contraseña debe ser una cadena de caracteres.' })
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })
  contrasena_usuario: string;

  @IsNotEmpty({ message: 'El rol es obligatorio.' })
  @IsNumber({}, { message: 'El id del rol debe ser un número.' })
  id_rol: number;

  @IsOptional()
  @IsNumber()
  id_data?: number;

  @IsNotEmpty({ message: 'El correo electrónico es obligatorio.' })
  @IsEmail(
    {},
    { message: 'El correo electrónico debe tener un formato válido.' },
  )
  email_usuario: string;

  @IsNotEmpty({ message: 'El nombre real es obligatorio.' })
  @IsString({ message: 'El nombre real debe ser una cadena de caracteres.' })
  nombre_usuario_real: string;

  @IsNotEmpty({ message: 'El apellido es obligatorio.' })
  @IsString({ message: 'El apellido debe ser una cadena de caracteres.' })
  apellido_usuario: string;

  @IsOptional()
  // Aquí podrías agregar más validaciones según el tipo de datos que esperas para foto_perfil
  foto_perfil?: any;
}
