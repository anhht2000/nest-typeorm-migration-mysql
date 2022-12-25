import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { UserDto } from './user.dto';

export class CreateUserDto extends UserDto {
  @Expose()
  @IsNotEmpty({ message: 'Không được rỗng' })
  password: string;

  @Expose()
  @IsNotEmpty({ message: 'Không được rỗng' })
  firstName: string;

  @Expose()
  @IsNotEmpty({ message: 'Không được rỗng' })
  lastName: string;
}
