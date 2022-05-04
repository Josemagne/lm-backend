import {BaseEntity, PrimaryColumn, Entity , Column, ManyToOne} from "typeorm"
import {User} from "./../"

@Entity("flashcard")
export default class Flashcard extends BaseEntity {
  @PrimaryColumn()
  flashcard_id: string;
  
  @Column()
  user_id: string;

  @Column()
  flashcardType: string;

  @Column({type: "char", length: 21, nullable: true})
  bookcollection_id: string
  
  @Column({type: "char", length: 21, nullable: true})
  book_id: string;
    
  @Column({type: "char", length: 21, nullable: true})
  chapter_id: string;

  @Column({type: "char", length: 21, nullable: true})
  subchapter_id: string;

  @Column({type: "char", length: 21, nullable: true})
  articlecollection_id: string;

  @Column({type: "char", length: 21, nullable: true})
  article_id: string;

  @Column()
  question: string;

  @Column()
  answer: string;

  @ManyToOne(() => User, user=> user.flashcards)
  user: User;
  
}
