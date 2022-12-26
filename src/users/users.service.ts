import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = new User();
    Object.assign(
      user,
      plainToClass(CreateUserDto, createUserDto, {
        excludeExtraneousValues: true,
      }),
    );
    return plainToClass(UserDto, this.userRepository.save(user), {
      excludeExtraneousValues: true,
    });
  }

  findAll(): UserDto {
    return plainToClass(UserDto, this.userRepository.find(), {
      excludeExtraneousValues: true,
    });
  }

  findOne(id: string) {
    return plainToClass(UserDto, this.userRepository.find({ where: { id } }), {
      excludeExtraneousValues: true,
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = new User();

    Object.assign(
      user,
      plainToClass(UpdateUserDto, updateUserDto, {
        excludeExtraneousValues: true,
      }),
    );
    return plainToClass(UserDto, this.userRepository.update(id, user), {
      excludeExtraneousValues: true,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
