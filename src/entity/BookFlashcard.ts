import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';

@Entity("bookflashcard")
export default class BookFlashcard extends BaseEntity {

    @PrimaryColumn()
    flashcard_id: string;

    @Column()
    user_id: string;

    @Column()
    book_id: string;

    @Column()
    question: string;

    @Column()
    answer: string;
}