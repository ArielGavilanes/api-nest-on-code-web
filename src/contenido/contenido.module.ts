import { Module } from '@nestjs/common';
import { ContenidoService } from './contenido.service';
import { ContenidoController } from './contenido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contenido } from './entity/contenido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contenido])],
  providers: [ContenidoService],
  controllers: [ContenidoController],
})
export class ContenidoModule {}
