import { Module } from '@nestjs/common';
import { MatriculasController } from './matriculas.controller';
import { MatriculasService } from './matriculas.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [MatriculasController],
  providers: [MatriculasService],
})
export class MatriculasModule {}
