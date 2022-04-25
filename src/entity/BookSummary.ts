import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity("booksummary")
export default class BookSummary extends BaseEntity {

    @PrimaryColumn()
    booksummary_id: string;

    @Column()
    user_id: string;

    @Column()
    book_id: string;

    @Column()
    summary: string;

}