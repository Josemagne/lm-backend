import type LM_Chapter from "./chapter";

export declare interface LM_Book {
    /**
     * Unique id that identifies the book
     */
    book_id: string;
    /**
     * The name of the author
     * If the author name is not known then we use "unknown"
     */
    author_name: string;
    /**
     * The prename of the author
     */
    author_prename: string;
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
    chapter: LM_Chapter[];
    summary: string;
    started: Date;
    ended: Date;
}