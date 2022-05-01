import {LM_EntityName} from "../Entity/entity"

export declare interface LM_Summary {
    summary_id: string;
    summary: string;
    summaryType: LM_EntityName;
    bookcollection_id?: string;
    book_id: string | undefined;
    chapter_id: string | undefined;
    subchapter_id?: string;
  articlecollection_id?: string;
  article_id: string | undefined;
}
