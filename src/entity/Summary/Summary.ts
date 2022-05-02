import {Column,Entity, PrimaryColumn, BaseEntity, ManyToOne} from "typeorm"
import {User} from "../"

@Entity("summary")
export default class Summary extends BaseEntity {
  @PrimaryColumn()
  summary_id: string;

  @Column()
  user_id: string;

  @Column()
  summary: string;

  @Column()
  summaryType: string; 

  @Column({type: "varchar", nullable: true})
  bookcollection_id: string | null;
  
  @Column({type: "varchar", nullable: true})
  book_id: string | null

  @Column({type: "varchar", nullable:  true})
  articlecollection_id: string | null

  @Column({type: "varchar", nullable: true})
  article_id: string  | null

  @Column({type: "varchar", nullable: true})
  chapter_id: string | null

  @Column({type: "varchar", nullable: true}) 
  subchapter_id: string | null

  @ManyToOne(() => User, user => user.summaries)
  user: User;
}
