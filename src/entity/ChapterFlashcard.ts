import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';

@Entity("chapterflashcard")
export default class ChapterFlashcard extends BaseEntity {

    @PrimaryColumn()
    flashcard_id: string;

    @Column()
    user_id: string;

    @Column()
    book_id: string;

    @Column()
    chapter_id: string;

    @Column()
    question: string;

    @Column()
    answer: string;
}