import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Question {

  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  category_id:number

  @Column() body: string;

  @Column({nullable:true}) answer_1: string;

  @Column({nullable:true}) answer_2: string;

  @Column({nullable:true}) answer_3: string;

  @Column({nullable:true}) answer_4: string;

  @Column() correct_answer: string;
}
