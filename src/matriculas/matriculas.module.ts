import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatriculasService } from './matriculas.service';
import { MatriculasController } from './matriculas.controller';
import { Matriculas } from './entity/matriculas.entity';
import { Cursos } from 'src/cursos/entity/cursos.entity';
import { Users } from 'src/users/entity/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Matriculas, Cursos, Users])],
  providers: [MatriculasService],
  controllers: [MatriculasController],
})
export class MatriculasModule {}
