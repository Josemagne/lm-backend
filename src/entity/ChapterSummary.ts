import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';

@Entity("chaptersummary")
export default class ChapterSummary extends BaseEntity {

    @PrimaryColumn()
    summary_id: string

    @Column()
    user_id: string;

    @Column()
    chapter_id: string;

    @Column()
    book_id: string;

    @Column()
    summary: string;


}