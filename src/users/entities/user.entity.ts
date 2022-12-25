import { Entity, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CommonEntity } from '@common/entity.common';

@Entity('users')
export class User extends CommonEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ select: false })
  password: string;

  @Column()
  age: number;

  @Column({ nullable: true })
  heigth: number;

  @BeforeInsert()
  @BeforeUpdate()
  async setPassword(password: string) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password || this.password, salt);
    this.password = hash;
  }
}
