/**
 * Interface for the summary of a chapter
 */
export default interface LM_Summary {
    /**
     * Unique id that identifies the summary
     */
    summary_id: string;
    /**
     * If null then it is the summary of a book
     */
    chapter_id: string | null;
    /**
     * The HTML string of the summary
     */
    data: string;
}