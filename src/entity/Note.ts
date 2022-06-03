import { Entity, PrimaryColumn, Column } from "typeorm";
import { LM_EntityName } from "../types/Entity/entity";

@Entity("note")
export default class Note {
  @PrimaryColumn()
  note_id: string;

  @Column()
  user_id: string;

  @Column()
  title: string;

  @Column()
  note: string;

  @Column()
  entity: LM_EntityName;

  @Column()
  entity_id: string;

  @Column()
  book_id: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
