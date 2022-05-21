import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm"

@Entity("subject")
export default class Subject {
  @PrimaryColumn()
  subject_id: string;

  @Column()
  user_id: string;

  @Column()
  title: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

