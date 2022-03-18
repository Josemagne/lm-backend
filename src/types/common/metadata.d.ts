import { LM_User } from "./user";

export default interface LM_Metadata {
    /**
     * Amount of books that are stored
     */
    amountOfBooks: number;
    /**
     * Indicates if the user is logged in
     */
    isLoggedIn: boolean;
    /**
     * Contains the book_id strings of the added books
     */
    books: string[];
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

}