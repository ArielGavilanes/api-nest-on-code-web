import { Cursos } from 'src/cursos/entity/cursos.entity';
import { Matriculas } from 'src/matriculas/entity/matriculas.entity';
import { Roles } from 'src/roles/entity/roles.entity';
import { UsersData } from 'src/users-data/entity/users-data.entity';

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('usuarios')
export class Users {
  @PrimaryGeneratedColumn({
    name: 'id_usuario',
    primaryKeyConstraintName: 'usuarios_pk',
  })
  id_usuario: number;

  @Column({ name: 'nombre_usuario', type: 'varchar', length: 50 })
  nombre_usuario: string;

  @Column({ name: 'contrasena_usuario', type: 'varchar' })
  contrasena_usuario: string;

  @Column({ name: 'es_activo', type: 'boolean', default: true })
  es_activo: boolean;

  @ManyToOne(() => Roles, (roles) => roles.users, { eager: true })
  @JoinColumn({ name: 'id_rol', foreignKeyConstraintName: 'roles_fk' })
  id_rol: Roles;

  @OneToMany(() => UsersData, (users_data) => users_data.id_usuario)
  users_data: UsersData[];

  @OneToMany(() => Cursos, (cursos) => cursos.id_creador)
  cursos: Cursos[];

  @OneToMany(() => Matriculas, (matriculas) => matriculas.id_estudiante)
  matriculas: Matriculas[];
}
