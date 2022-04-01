import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserAnswersQuestion {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column() answer: string;

  @Column() is_correct:boolean

  @Column() user_id:number

  @Column() question_id:number
}
