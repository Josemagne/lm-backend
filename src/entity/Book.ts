import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne} from "typeorm";
import {Chapter, Author, User} from "./"

@Entity("book")
export default class Book extends BaseEntity {
    @PrimaryColumn({
        length: 21,
    })
    book_id: string;

    @Column()
    user_id: string;

    @Column()
    author_id: string;

    @Column()
    author_prename: string;

    @Column({nullable: true, type: "varchar"})
    author_name: string;

    @Column()
    book_title: string;

    @Column()
    pages: number;

    @Column()
    status: string;

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

    @ManyToOne(() => User, (user) => user.books)
    user: User;

    @OneToMany(() => Chapter, (chapter) => chapter.book, {
        cascade: ['insert', 'update'],
    })
    chapters: Chapter[];

    @ManyToOne(() => Author, (author) => author.books )
    author: Author;

}
