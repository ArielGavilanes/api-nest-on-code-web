import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Users } from 'src/users/entity/users.entity';
import { Role } from 'src/common/enum/role.enum';

@Entity('roles')
export class Roles {
  @PrimaryGeneratedColumn({
    name: 'id_rol',
    primaryKeyConstraintName: 'roles_pk',
  })
  id_rol: number;

  @Column({
    name: 'nombre_rol',
    type: 'enum',
    // default: Role.CREADOR,
    enum: Role,
  })
  nombre_rol: Role;

  @OneToMany(() => Users, (users) => users.id_rol)
  users: Users[];
}
