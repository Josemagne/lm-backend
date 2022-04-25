/**
 * Interface for the summary of a chapter
 */
export default interface LM_Summary {
    /**
     * Unique id that identifies the summary
     */
    summary_id: string;
    /**
     * ID of the book
     */
    book_id: string;
    /**
     * The HTML string of the summary
     */
    data: string;
}