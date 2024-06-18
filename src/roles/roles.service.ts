import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from './entity/roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Roles) private rolesRepository: Repository<Roles>,
  ) {}

  async getAllRoles(): Promise<Roles[]> {
    const rolesFound = await this.rolesRepository.find();
    if (!rolesFound) {
      throw new NotFoundException();
    }
    return rolesFound;
  }
}
