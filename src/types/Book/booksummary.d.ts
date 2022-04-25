/**
 * Interface for the summary of a chapter
 */
export default interface LM_BookSummary {
    /**
     * Unique id that identifies the summary
     */
    summary_id: string;
    book_id: string;
    /**
     * The HTML string of the summary
     */
    summary: string;
}