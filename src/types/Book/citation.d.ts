export declare interface LM_Citation {
    citation_id: string;
    /**
     * The citation itself
     */
    data: string;
    /**
     * ID of the book where the citation belongs
     */
    book_id: string;
    /**
     * ID of the chapter where the citation belongs
     */
    chapter_id: string;
    /**
     * Comment for a citation
     */
    comment: string;
}