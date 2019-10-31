import { IsNotEmpty, ValidateNested, IsOptional } from 'class-validator';
import { Type, plainToClassFromExist } from 'class-transformer';

export class Department {
  static strings = {
    id: 'Id',
    name: 'Name'
  };
  static fields = ['id', 'name'];
  id: number;
  @IsNotEmpty()
  name: string;
  constructor(data?: any) {
    plainToClassFromExist(this, data);
  }
}
