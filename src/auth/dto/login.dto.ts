import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  //id_usuario: number;

  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio.' })
  @IsString({
    message: 'El nombre de usuario debe ser una cadena de caracteres.',
  })
  nombre_usuario: string;

  @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
  @IsString({ message: 'La contraseña debe ser una cadena de caracteres.' })
  contrasena_usuario: string;
}
