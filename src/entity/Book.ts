import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn, ManyToMany } from "typeorm";
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

    @Column()
    progress: number;


    @CreateDateColumn()
    started: Date;

    @UpdateDateColumn()
    ended: Date;

    @Column({ type: "simple-array" })
    chapters: Chapter;

    @OneToMany(() => Chapter, (chapter) => chapter.chapter_id)

    @ManyToMany(() => Author)
    author: Author;

    @JoinColumn({ name: "chapter_id" })
    chapter: Chapter;

}