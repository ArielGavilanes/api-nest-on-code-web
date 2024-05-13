import { TipoContenidoEnum } from 'src/common/enum/tipo-contenido.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tipo de contenido')
export class TipoContenido {
  @PrimaryGeneratedColumn({
    name: 'id_tipo_contenido',
    primaryKeyConstraintName: 'tipo_contenido_pk',
  })
  id_tipo_contenido: number;

  @Column({
    name: 'nombre_tipo_contenido',
    type: 'enum',
    enum: TipoContenidoEnum,
  })
  nombre_tipo_contenido: TipoContenidoEnum;
}
