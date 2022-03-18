import type LM_Chapter from "./chapter";

export declare interface LM_Book {
    /**
     * Unique id that identifies the book
     */
    book_id: string;
    /**
     * Full name of the author
     */
    author: string;
    book_title: string;
    /**
     * Number of pages
     */
    pages: number;
    /**
     * Decides if the book is finished
     */
    read: boolean;
    /**
     * A number between 1 and 100 that indicates how far we have gotten with the book.
     */
    progress: number;
    chapters: LM_Chapter[];
    summary: string;
    /**
     * Number between 1 and 5 for stars.
     */
    rate: number;
}
