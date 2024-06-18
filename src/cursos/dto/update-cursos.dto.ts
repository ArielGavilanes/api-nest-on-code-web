import { PartialType } from '@nestjs/mapped-types';
import { CursosDto } from './cursos.dto';

export class UpdateCoursesDto extends PartialType(CursosDto) {}
