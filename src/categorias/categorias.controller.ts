import { Controller, Get } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { Categorias } from './interface/categorias.interface';

@Controller('categorias')
export class CategoriasController {
  constructor(private categoriasService: CategoriasService) {}

  @Get('')
  async getAllRoles(): Promise<Categorias[]> {
    return await this.categoriasService.getAllCategories();
  }
}
