import { Users } from 'src/users/entity/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('datos de usuario')
export class UsersData {
  @PrimaryGeneratedColumn({
    name: 'id_data',
    primaryKeyConstraintName: 'datos_de_usuario_pk',
  })
  id_data: number;

  @Column({
    name: 'email_usuario',
    type: 'varchar',
    length: 255,
  })
  email_usuario: string;

  @Column({
    name: 'nombre_usuario',
    type: 'varchar',
    length: 50,
  })
  nombre_usuario: string;

  @Column({
    name: 'apellido_usuario',
    type: 'varchar',
    length: 50,
  })
  apellido_usuario: string;

  @Column({
    name: 'foto_perfil',
    type: 'bytea',
    default: () => "decode('ffffff', 'hex')",
  })
  foto_perfil: Buffer;

  @Column({
    name: 'foto_portada',
    type: 'bytea',
    default: () => "decode('ffffff', 'hex')",
  })
  foto_portada: Buffer;

  @ManyToOne(() => Users, (users) => users.users_data)
  @JoinColumn({ name: 'id_usuario', foreignKeyConstraintName: 'usuarios_fk' })
  id_usuario: Users;
}
