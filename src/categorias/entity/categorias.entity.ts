import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categorias')
export class Categorias {
  @PrimaryGeneratedColumn({
    name: 'id_categoria',
    primaryKeyConstraintName: 'categorias_pk',
  })
  id_categoria: number;

  @Column({ name: 'nombre_categoria', type: 'varchar', length: '50' })
  nombre_categoria: string;
}
