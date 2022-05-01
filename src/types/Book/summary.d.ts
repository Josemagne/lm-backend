import {LM_EntityName} from "../../types/Entity/entity";
/**
 * Interface for the summary of a chapter
 */
export default interface LM_Summary {
    /**
     * Unique id that identifies the summary
     */
    summary_id: string;
    summaryType: LM_EntityName;
    bookcollection_id?: string;
    book_id?: string;
    subchapter_id?: string;
  article_id?:string;
  articlecollection_id?: string;
    /**
     * If null then it is the summary of a book
     */
    chapter_id?: string;
    /**
     * The HTML string of the summary
     */
    summary: string;
}
