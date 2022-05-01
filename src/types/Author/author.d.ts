export declare interface LM_Author {
    author_id: string;

    author_prename: string;

    author_name: string;
    /**
     * IDs of books that the author has participated in
     */
    books: string[];
    /**
     * Decides if the author is a favorite of the user
     */
    favorite: boolean;

}
