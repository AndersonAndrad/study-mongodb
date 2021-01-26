import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

@Entity('user')
export class UserEntity {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  @IsString()
  @IsNotEmpty({ message: 'The name field is empty' })
  name: string;

  @Column()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  password_hash: string;
}
