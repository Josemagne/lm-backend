import { LM_Book } from "../Book/book";
import { LM_User } from "./user";

export declare interface LM_Metadata {
    /**
     * Books that are in the server
     */
    serverBooks: {
        amount: number;
        /**
         * the book_id strings for the book on the server
         */
        books: string[];
    };
    frontendBooks: {
        /**
         * Amount of books in the frontend
         */
        amount: number;
        /**
         * book_id strings for the books that are in the frontend
         */
        books: string[];
    };
    /**
     * book_id strings of the books that are not saved in the backend
     */
    notSynchronizedBooks: { book_id: string, status: "add" | "delete" | "update" }[];
    /**
     * Information about the user
     */
    user: LM_User;
    /**
     * Contains an array of book_id strings
     */
    favoriteBooks: string[];
    /**
     * Books that are not synchronized
     */
    unSynchronizedBooks: LM_Book[]

}