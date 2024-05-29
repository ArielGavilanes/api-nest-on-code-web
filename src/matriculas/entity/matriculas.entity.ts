import { Cursos } from 'src/cursos/entity/cursos.entity';
import { Users } from 'src/users/entity/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('matriculas')
export class Matriculas {
  @PrimaryGeneratedColumn({
    name: 'id_matricula',
    primaryKeyConstraintName: 'matriculas_pk',
  })
  id_matricula: number;

  @Column({
    name: 'matriculado_a',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  matriculado_a: Date;

  @ManyToOne(() => Cursos, (cursos) => cursos.matriculas)
  @JoinColumn({
    name: 'id_curso',
    foreignKeyConstraintName: 'cursos_fk',
  })
  id_curso: Cursos;

  @ManyToOne(() => Users, (users) => users.matriculas)
  @JoinColumn({
    name: 'id_estudiante',
    foreignKeyConstraintName: 'users_fk',
  })
  id_estudiante: Users;
}
