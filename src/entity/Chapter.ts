import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import Book from './Book';

@Entity("chapters")
export default class Chapter extends BaseEntity {

    @PrimaryColumn()
    chapter_id: string;

    // NOTE Foreign Key (fk)
    @Column({
        nullable: false
    })
    book_id: string;

    @Column(
        {
            nullable: false
        }
    )
    title: string;

    @Column(
        {
            default: false
        }
    )
    toRead: boolean;

    @Column({
        default: false
    })
    read: boolean;

    @Column({
        type: "numeric",
        nullable: true
    })
    importance: number;

    @Column({
        nullable: true
    })
    summary: string;

    @Column(
        {
            nullable: true,
            array: true,
            type: "text"
        }
    )

    @Column({
        nullable: false,
        default: false
    })
    isSubchapter: boolean;

    @Column({
        nullable: false
    })
    index: string;

    @Column(
        {
            nullable: true
        }
    )
    parentChapter: string;

    @CreateDateColumn(
        {
            nullable: true
        }
    )
    started: Date | null;

    @UpdateDateColumn({
        nullable: true
    })
    ended: Date | null;

    @ManyToOne(() => Book, (book) => book.chapters)
    // @JoinColumn({ name: "JoinColumn_book_chapter" })
    book: Book;


}