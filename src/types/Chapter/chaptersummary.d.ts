/**
 * Interface for the summary of a chapter
 */
export default interface LM_ChapterSummary {
    /**
     * Unique id that identifies the summary
     */
    summary_id: string;
    book_id: string;
    chapter_id: string;
    /**
     * The HTML string of the summary
     */
    summary: string;
}