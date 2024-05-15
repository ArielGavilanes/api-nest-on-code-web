import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cursos')
export class Cursos {
  @PrimaryGeneratedColumn({
    name: 'id_curso',
    primaryKeyConstraintName: 'cursos_pk',
  })
  id_curso: number;

  @Column({ name: 'nombre_curso', type: 'varchar', length: '50' })
  nombre_curso: string;

  @Column({ name: 'descripcion_curso', type: 'varchar', length: '500' })
  descripcion_curso: string;

  @Column({ name: 'premium _curso', type: 'boolean', default: false })
  premium_curso: boolean;

  @Column({ name: 'precio_curso', type: 'float', default: 0 })
  precio_curso: number;

  @Column({
    name: 'portada_curso',
    type: 'bytea',
    default: () => "decode('ffffff', 'hex')",
  })
  portada_curso: Buffer;
}
