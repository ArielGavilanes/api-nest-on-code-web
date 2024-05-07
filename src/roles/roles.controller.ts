import { Controller, Get } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Roles } from './interface/roles.interface';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get('')
  async getAllRoles(): Promise<Roles[]> {
    return this.rolesService.getAllRoles();
  }
}
