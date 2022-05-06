import { Entity, BaseEntity, PrimaryColumn, Column, OneToMany, JoinTable } from 'typeorm';
import Book from './Book';

@Entity("author")
export default class Author extends BaseEntity {
    @PrimaryColumn()
    author_id: string;

    @Column()
    user_id: string;

     @Column()
     author_prename: string;

     @Column({nullable: true, type: "varchar"})
     author_name: string;

    @Column()
    favorite: boolean;

    @OneToMany(() => Book, (book)=> book.author)
    books: Book[];

    //@JoinTable({
        //name: "authors_books", joinColumn: { name: "authors", referencedColumnName: "author_id" }, inverseJoinColumn: {
            //name: "books", referencedColumnName: "book_id"
        //}
    //})
    //books: Book[];

}
