import { Categorias } from 'src/categorias/entity/categorias.entity';
import { Users } from 'src/users/entity/users.entity';

export class CursosDto {
  id_curso?: number;
  nombre_curso: string;
  descripcion_curso: string;
  premium_curso: boolean;
  precio_curso?: number;
  portada_curso?: any;
  id_creador: Users;
  id_categoria: Categorias;
}
//