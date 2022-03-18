import { LM_Book } from "./book";

export declare interface LM_Author {
    author_id: string;

    author_prename: string;

    author_name: string;

    /**
     * composite of author_prename and author_name
     */
    author_fullname: string;

    /**
     * The book_id strings for the books that the author has written or participated in
     */
    books: LM_Book[];

    /**
     * Decides if it is a favorite author
     */
    favorite: boolean;
}