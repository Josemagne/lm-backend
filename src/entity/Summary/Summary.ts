import {Column,Entity, PrimaryColumn, BaseEntity, ManyToOne} from "typeorm"
import {User} from "../"

Entity("summary")
export default class Summary extends BaseEntity {
  @PrimaryColumn()
  summary_id: string;

  @Column()
  user_id: string;

  @Column()
  summary: string;

  @Column()
  summaryType: string; 

  @Column({nullable: true})
  bookcollection_id: string | undefined 
  
  @Column({nullable: true})
  book_id: string | undefined

  @Column({nullable:  true})
  articlecollection_id: string | undefined

  @Column({nullable: true})
  article_id: string  | undefined

  @Column({nullable: true})
  chapter_id: string | undefined

  @Column({nullable: true}) 
  subchapter_id: string | undefined

  @ManyToOne(() => User, user => user.summaries)
  user: User;
}
