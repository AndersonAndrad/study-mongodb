import { Entity, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity('log')
export class LogEntity {
  @ObjectIdColumn()
  _id: ObjectID;
}
