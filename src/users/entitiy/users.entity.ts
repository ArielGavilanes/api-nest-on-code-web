import { Roles } from 'src/roles/entity/roles.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @Column({ name: 'contrasena_usuario', type: 'varchar', length: 50 })
  contrasena_usuario: string;

  @Column({ name: 'es_activo', type: 'boolean' })
  es_activo: string;

  @ManyToOne(() => Roles, (roles) => roles.users)
  @JoinColumn({ name: 'id_rol', foreignKeyConstraintName: 'roles_fk' })
  id_rol: Roles;
}
