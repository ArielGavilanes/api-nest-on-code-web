import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from 'src/common/enum/role.enum';
import { Users } from 'src/users/entity/users.entity';

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
  nombre_rol: string;

  @OneToMany(() => Users, (users) => users.id_rol)
  users: Users[];
}
