import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoContenido } from './entity/tipo-contenido.entity';
import { TipoContenidoService } from './tipo-contenido.service';
import { TipoContenidoController } from './tipo-contenido.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TipoContenido])],
  providers: [TipoContenidoService],
  controllers: [TipoContenidoController],
  //   exports: [UsersService],
})
export class TipoContenidoModule {}
