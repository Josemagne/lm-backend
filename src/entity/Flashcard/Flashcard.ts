import {BaseEntity, PrimaryColumn, Entity , Column, ManyToOne} from "typeorm"
import {User} from "./../"

@Entity("flashcard")
export default class Flaschard extends BaseEntity {
  @PrimaryColumn()
  flashcard_id: string;
  
  @Column()
  user_id: string;

  @Column()
  flashcardType: string;

  @Column()
  bookcollection_id: string
  
  @Column()
  book_id: string;
    
  @Column()
  chapter_id: string;

  @Column()
  subchapter_id: string;

  @Column()
  articlecollection_id: string;

  @Column()
  article_id: string;

  @Column()
  question: string;

  @Column()
  answer: string;

  @ManyToOne(() => User, user=> user.flashcards)
  user: User;
  
}
