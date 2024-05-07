import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from './entity/roles.entity';
import { Repository } from 'typeorm';
import { Roles as Role } from './interface/roles.interface';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles) private rolesRepository: Repository<Roles>,
  ) {}

  async getAllRoles(): Promise<Role[]> {
    const rolesFound = await this.rolesRepository.find();
    return rolesFound;
  }
}
