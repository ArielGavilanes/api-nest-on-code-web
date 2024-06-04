import { Cursos } from 'src/cursos/entity/cursos.entity';
import { TipoContenido } from 'src/tipo-contenido/entity/tipo-contenido.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('contenidos')
export class Contenido {
  @PrimaryGeneratedColumn({
    name: 'id_contenido',
    primaryKeyConstraintName: 'contenidos_pk',
  })
  id_contenido: number;

  @Column({ name: 'nombre_seccion_contenido', type: 'varchar', length: '50' })
  nombre_seccion_contenido: string;

  @Column({ name: 'descripcion_contenido', type: 'varchar', length: '300' })
  descripcion_contenido: string;

  @Column({
    name: 'texto_contenido',
    type: 'varchar',
    length: '300',
    nullable: true,
  })
  texto_contenido: string;

  @Column({
    name: 'url_video_contenido',
    type: 'varchar',
    length: '300',
    nullable: true,
  })
  url_video_contenido: string;

  @Column({ name: 'imagen_contenido', type: 'bytea', nullable: true })
  imagen_contenido: Buffer;

  @ManyToOne(() => Cursos, (cursos) => cursos.contenidos)
  @JoinColumn({
    name: 'id_curso',
    foreignKeyConstraintName: 'cursos_fk',
  })
  id_curso: Cursos;

  @ManyToOne(() => TipoContenido, (tipoContenido) => tipoContenido.contenidos)
  @JoinColumn({
    name: 'id_tipo_contenido',
    foreignKeyConstraintName: 'tipos_contenido_fk',
  })
  id_tipo_contenido: Cursos;
}
