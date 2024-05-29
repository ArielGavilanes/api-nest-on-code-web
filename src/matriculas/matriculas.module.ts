import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatriculasService } from './matriculas.service';
import { MatriculasController } from './matriculas.controller';
import { Matriculas } from './entity/matriculas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Matriculas])],
  providers: [MatriculasService],
  controllers: [MatriculasController],
})
export class MatriculasModule {}
