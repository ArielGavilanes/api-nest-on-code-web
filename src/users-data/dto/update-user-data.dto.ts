import { PartialType } from '@nestjs/mapped-types';
import { UserDataDto } from './user-data.dto';

export class UpdateUsersDataDto extends PartialType(UserDataDto) {}
