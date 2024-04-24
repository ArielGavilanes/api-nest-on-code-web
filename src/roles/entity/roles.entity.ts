import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from 'src/common/enum/roles.enum';
import { Users } from 'src/users/entitiy/users.entity';

@Entity('roles')
export class Roles {
  @PrimaryGeneratedColumn({
    name: 'id_rol',
    primaryKeyConstraintName: 'roles_pk',
  })
  id_rol: number;

  @Column({ name: 'nombre_rol', type: 'enum', enum: Role })
  nombre_rol: string;

  @OneToMany(() => Users, (users) => users.id_rol)
  users: Users[];
}
