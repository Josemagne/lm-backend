import { Entity, Column, PrimaryColumn, BaseEntity , OneToMany} from 'typeorm';
import {Book, Chapter, Flashcard, Summary} from "../entity";

@Entity("users")
export default class User extends BaseEntity {

    @PrimaryColumn()
    user_id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    token: string;

    @OneToMany(() => Book, book => book.user)
    books: Book[]

    @OneToMany(() => Chapter, chapter => chapter.user)
    chapters: Chapter[]

    @OneToMany(() => Flashcard, flashcard => flashcard.user)
    flashcards: Flashcard[]

    @OneToMany(() => Summary, summary => summary.user)
    summaries: Summary[]

    //@OneToMany()
    //commentaries: Commentary[]

    //@OneToMany()
    //notes: Note[]
  
    //@OneToMany()
    //pictures: Picture[]


}
