import { LM_Book } from "./book";

export declare interface LM_Author {
    author_id: string;

    author_prename: string;

    author_name: string | undefined;

    /**
     * Decides if it is a favorite author
     */
    favorite: boolean;
}
