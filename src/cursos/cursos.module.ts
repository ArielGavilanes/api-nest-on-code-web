import { Module } from '@nestjs/common';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cursos } from './entity/cursos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cursos])],
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {}
