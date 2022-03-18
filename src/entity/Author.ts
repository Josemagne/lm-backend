import { Entity, BaseEntity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import Book from './Book';
import { LM_Author } from 'src/types/Book/author';
import { LM_Book } from 'src/types/Book/book';

@Entity("authors")
export class Author extends BaseEntity {
    @PrimaryColumn()
    author_id: string;
    @Column()
    author_prename: string;
    @Column()
    author_name: string;
    @Column({ type: "simple-array" })
    books: Book[];
    @Column()
    favorite: boolean;

    @ManyToMany(() => Book)

    @JoinTable({
        name: "authors_books", joinColumn: { name: "authors", referencedColumnName: "author_id" }, inverseJoinColumn: {
            name: "books", referencedColumnName: "book_id"
        }
    })
    book: Book[];

}
