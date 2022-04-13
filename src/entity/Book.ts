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
    user_id: string;

    @Column()
    book_title: string;

    @Column()
    pages: number;

    @Column()
    read: boolean;

    @Column()
    progress: number;


    @Column({
        nullable: true
    })
    started: Date;

    @Column({
        nullable: true
    })
    ended: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Chapter, (chapter) => chapter.book, {
        cascade: true,
    })
    chapters: Chapter[];

    @ManyToMany(() => Author)
    author: Author;

}