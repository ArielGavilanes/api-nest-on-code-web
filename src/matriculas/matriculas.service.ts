import { Injectable} from '@nestjs/common'; 
import { Curso } from 'src/cursos/interface/cursos.interface'; 
import { HttpService } from '@nestjs/axios';

@Injectable()
export class MatriculasService {
  constructor(private http: HttpService) {}

  async getCursosPorEstudiante(idEstudiante: number): Promise<Curso[]> {
    const response = await this.http.get(`https://blog.hubspot.com/website/api-endpoint/matriculas/courses/${idEstudiante}`).toPromise();
    return response.data as Curso[]; 
  }
}

