import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Matriculas } from './entity/matriculas.entity';

@Injectable()
export class MatriculasService {
  constructor(
    @InjectRepository(Matriculas)
    private matriculasRepository: Repository<Matriculas>,
  ) {}

  async createMatricula(matricula: any): Promise<any> {
    const nuevaMatricula = this.matriculasRepository.create(matricula);
    return await this.matriculasRepository.save(nuevaMatricula);
  }

  async getCoursesWhereStudentsAreMatriculatedIn(id_estudiante): Promise<any> {
    return await this.matriculasRepository.find({
      where: { id_estudiante: { id_usuario: id_estudiante } },
      relations: ['id_curso'],
    });
  }

  async verifyIfAStudentIsMatriculatedIn(
    id_curso,
    id_estudiante,
  ): Promise<boolean> {
    const matricule = await this.matriculasRepository.findOne({
      where: {
        id_curso: id_curso,
        id_estudiante: { id_usuario: id_estudiante },
      },
    });

    if (matricule) {
      return true;
    }

    return false;
  }

  async getMatriculeOfTheLast3Days(id_estudiante): Promise<any> {
    const fechaActual = new Date();
    const tresDiasAntes = new Date(
      fechaActual.getTime() - 3 * 24 * 60 * 60 * 1000,
    );

    const matriculas = await this.matriculasRepository
      .createQueryBuilder('matricula')
      .select('DATE(matricula.matriculado_a) as fecha')
      .addSelect('COUNT(matricula.id_estudiante) as id_estudiante')
      .where(
        'matricula.matriculado_a BETWEEN :tresDiasAntes AND :fechaActual',
        {
          tresDiasAntes,
          fechaActual,
        },
      )
      .andWhere('matricula.id_estudiante = :id_estudiante', { id_estudiante })
      .groupBy('DATE(matricula.matriculado_a)')
      .orderBy('DATE(matricula.matriculado_a)', 'ASC')
      .getRawMany();

    return matriculas.map((matricula) => ({
      fecha: matricula.fecha,
      id_estudiante: parseInt(matricula.id_estudiante) || 0,
    }));
  }
}
