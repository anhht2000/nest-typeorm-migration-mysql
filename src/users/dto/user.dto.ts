import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsInt, Min, Max } from 'class-validator';
import { CommonDto } from 'src/common/dto.common';

export class UserDto extends CommonDto {
  @Expose()
  id: string;

  @Expose()
  @IsNotEmpty({ message: 'Không được rỗng' })
  @IsInt({ message: 'Phải là số' })
  @Min(0, { message: 'Số phải lớn hơn 0' })
  @Max(10, { message: 'Số phải nhỏ hơn 10' })
  age: number;

  @Expose()
  @Transform(({ obj }: any) => obj.firstName + ' ' + obj.lastName)
  fullName: string;

  @Expose()
  @IsNotEmpty({ message: 'Không được rỗng' })
  @IsInt({ message: 'Phải là số' })
  heigth: number;
}
