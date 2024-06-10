import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ContenidoService } from './contenido.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ContenidoDto } from './dto/contenido.dto';

@Controller('contenido')
export class ContenidoController {
  constructor(private contenidosService: ContenidoService) {}

  @Post()
  @UseInterceptors(FileInterceptor('imagen_contenido'))
  async createContent(
    @UploadedFile() imagen_contenido: Express.Multer.File,
    @Body() content: ContenidoDto,
  ) {
    console.log(content); //TODO: Borrar este console.log
    if (imagen_contenido) {
      content.imagen_contenido = imagen_contenido;
    }

    return await this.contenidosService.createContent(content);
  }

  @Get(':id_curso')
  async getContentFromACourseById(
    @Param('id_curso', ParseIntPipe) id_curso: number,
  ) {
    return this.contenidosService.getContentFromACourseById(id_curso);
  }
}
