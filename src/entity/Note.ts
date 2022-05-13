import {Entity, PrimaryColumn, Column, } from "typeorm";

@Entity("note")
export default class Note {

  @PrimaryColumn()
  note_id: string;

  @Column()
  title: string;

  @Column()
  note: string;

  @Column()
  user_id: string;
  
  @Column()
  book_id: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

}
