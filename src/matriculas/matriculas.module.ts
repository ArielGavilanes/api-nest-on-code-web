import { Module } from '@nestjs/common';
import { MatriculasController } from './matriculas.controller';
import { MatriculasService } from './matriculas.service';

@Module({
  providers: [MatriculasService],
  controllers: [MatriculasController],
})
export class MatriculasModule {}
