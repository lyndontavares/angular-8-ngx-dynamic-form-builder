import { IsNotEmpty, IsEmail, ValidateNested, IsOptional } from 'class-validator';
import { Type, plainToClassFromExist } from 'class-transformer';
import { Department } from './department';

export class User {
  static strings = {
    id: 'Id',
    username: 'Username',
    password: 'Password',
    isSuperuser: 'Administrator',
    isStaff: 'Staff',
    email: 'Email',
    department: 'Department',
    dateOfBirth: 'Date of birth',
    departmentStrings: Department.strings,
  };
  static fields = ['id', 'username', 'password', 'isSuperuser',
    'isStaff', 'email', 'department', 'dateOfBirth'];
  id: number;
  @IsNotEmpty()
  username: string;
  password: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ValidateNested()
  @IsOptional()
  @Type(() => Department)
  department: Department;
  dateOfBirth: string;
  constructor(data?: any) {
    plainToClassFromExist(this, data);
  }
}