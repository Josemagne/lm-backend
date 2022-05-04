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

  @Column({type: "char", nullable: true, length: 21})
  bookcollection_id: string | undefined;
  
  @Column({type: "char", nullable: true, length: 21})
  book_id: string | undefined 

  @Column({type: "char", nullable: true, length: 21})
  articlecollection_id: string | undefined

  @Column({type: "char", nullable: true, length: 21})
  article_id: string  | undefined

  @Column({type: "char", nullable: true, length: 21})
  chapter_id: string | undefined

  @Column({type: "char", nullable: true, length: 21})
  subchapter_id: string | undefined

  @ManyToOne(() => User, user => user.summaries)
  user: User;
}
