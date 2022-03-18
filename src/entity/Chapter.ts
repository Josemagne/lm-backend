import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Book from './Book';
import LM_Chapter from '../types/Book/chapter';

@Entity("chapter")
export default class Chapter extends BaseEntity {

    @PrimaryColumn({})
    chapter_id: string;

    // NOTE Foreign Key (fk)
    book_id: string;

    @Column()
    title: string;

    @Column()
    toRead: boolean;

    @Column({
        type: "numeric"
    })
    importance: number;

    @CreateDateColumn()
    started: Date;

    @UpdateDateColumn()
    ended: Date;

    @ManyToOne(() => Book, (book) => book.chapter)

    @JoinColumn({ name: "book_id" })
    book: Book;



}