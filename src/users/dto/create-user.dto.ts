import { Expose, Transform } from 'class-transformer';
import { IsInt, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateUserDto {
  @Expose()
  @IsNotEmpty({ message: 'Không được rỗng' })
  password: string;

  @Expose()
  @IsNotEmpty({ message: 'Không được rỗng' })
  firstName: string;

  @Expose()
  @IsNotEmpty({ message: 'Không được rỗng' })
  lastName: string;

  @Expose()
  @IsNotEmpty({ message: 'Không được rỗng' })
  @IsInt({ message: 'Phải là số' })
  @Min(0, { message: 'Số phải lớn hơn 0' })
  @Max(10, { message: 'Số phải nhỏ hơn 10' })
  age: number;

  @Expose()
  heigth: number;
}
