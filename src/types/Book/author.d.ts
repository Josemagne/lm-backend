import { LM_Book } from "./book";

export declare interface LM_Author {
    author_id: string;

    author_prename: string;

    author_name: string;

    /**
     * The books that the author has written or participated in
     */
    books: LM_Book[];

    favorite: boolean;
}