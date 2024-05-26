import { Categorias } from 'src/categorias/entity/categorias.entity';
import { Matriculas } from 'src/matriculas/entity/matriculas.entity';
import { Users } from 'src/users/entity/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @Column({ name: 'premium_curso', type: 'boolean', default: false })
  premium_curso: boolean;

  @Column({ name: 'precio_curso', type: 'float', default: 0 })
  precio_curso: number;

  @Column({
    name: 'portada_curso',
    type: 'bytea',
    default: () => "decode('ffffff', 'hex')",
  })
  portada_curso: Buffer;

  @ManyToOne(() => Users, (users) => users.cursos)
  @JoinColumn({ name: 'id_creador', foreignKeyConstraintName: 'usuarios_fk' })
  id_creador: Users;

  @ManyToOne(() => Categorias, (categorias) => categorias.cursos)
  @JoinColumn({
    name: 'id_categoria',
    foreignKeyConstraintName: 'categorias_fk',
  })
  id_categoria: Categorias;

  @OneToMany(() => Matriculas, (matriculas) => matriculas.id_curso)
  matriculas: Matriculas[];
}
