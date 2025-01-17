import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorias } from './entity/categorias.entity';
import { Repository } from 'typeorm';
import { Categorias as CategoriasInterface } from './interface/categorias.interface';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categorias)
    private categoriasRepository: Repository<Categorias>,
  ) {}

  async getAllCategories(): Promise<CategoriasInterface[]> {
    const categoriesFound = await this.categoriasRepository.find();
    return categoriesFound;
  }

  async getIdFromCategoryName(nombre_categoria): Promise<any> {
    const categoryFound = await this.categoriasRepository.findOne({
      where: { nombre_categoria: nombre_categoria },
      select: ['id_categoria'],
    });

    return categoryFound;
  }
}
