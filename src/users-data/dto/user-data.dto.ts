import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UserDataDto {
  @IsNotEmpty({ message: 'El id_data es obligatorio.' })
  @IsNumber({}, { message: 'El id_data debe ser un número.' })
  id_data: number;

  @IsNotEmpty({ message: 'El correo electrónico es obligatorio.' })
  @IsEmail(
    {},
    { message: 'El correo electrónico debe tener un formato válido.' },
  )
  email_usuario: string;

  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio.' })
  @IsString({
    message: 'El nombre de usuario debe ser una cadena de caracteres.',
  })
  nombre_usuario: string;

  @IsNotEmpty({ message: 'El apellido de usuario es obligatorio.' })
  @IsString({
    message: 'El apellido de usuario debe ser una cadena de caracteres.',
  })
  apellido_usuario: string;

  @IsOptional()
  foto_perfil: any;

  @IsOptional()
  foto_portada: any;

  @IsNotEmpty({ message: 'El id_usuario es obligatorio.' })
  @IsNumber({}, { message: 'El id_usuario debe ser un número.' })
  id_usuario: number;
}
