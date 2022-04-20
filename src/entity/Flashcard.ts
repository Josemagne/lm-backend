import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm';

@Entity("flahscards")
export default class Flashcard extends BaseEntity {

    @PrimaryColumn()
    flashcard_id: string;

    @Column()
    question: string;

    @Column()
    answer: string;
}