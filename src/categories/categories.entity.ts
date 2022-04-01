import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Categories {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column() name: string;
}
