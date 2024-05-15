import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tests')
export class Test extends BaseEntity {
  @PrimaryGeneratedColumn({ comment: 'The test unique identificator' })
  id: number;

  @Column({
    type: 'varchar',
  })
  title: string;

  @Column({
    type: 'text',
  })
  description: string;
}
