import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from "typeorm";
import Chapter from './Chapter';
import { Author } from './Author';

@Entity("books")
export default class Book extends BaseEntity {
    @PrimaryColumn({
        length: 21,
    })
    book_id: string;

    @Column()
    book_title: string;

    @Column()
    pages: number;

    @Column()
    read: boolean;

    @Column({ type: "json", nullable: true, default: {} })
    contents: {};

    @Column()
    progress: number;


    @CreateDateColumn()
    started: Date;

    @UpdateDateColumn()
    ended: Date;

    @OneToMany(() => Chapter, (chapter) => chapter.book, {
        cascade: true
    })
    chapters: Chapter[];

    @ManyToMany(() => Author)
    author: Author;

}