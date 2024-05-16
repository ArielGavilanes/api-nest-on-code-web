import { Cursos } from 'src/cursos/entity/cursos.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categorias')
export class Categorias {
  @PrimaryGeneratedColumn({
    name: 'id_categoria',
    primaryKeyConstraintName: 'categorias_pk',
  })
  id_categoria: number;

  @Column({ name: 'nombre_categoria', type: 'varchar', length: '50' })
  nombre_categoria: string;

  @OneToMany(() => Cursos, (cursos) => cursos.id_categoria)
  cursos: Cursos[];
}
