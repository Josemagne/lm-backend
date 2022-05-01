import { LM_EntityName } from "../Entity/entity";

export declare interface LM_GlossaryWord {
    glossaryword_id: string;
    entityType: LM_EntityName;
    bookcollection_id: string | undefined;
    book_id: string | undefined;
    chapter_id: string | undefined;
    subchapter_id: string | undefined;
    article_id: string | undefined;
    articlecollection_id: string | undefined;
    type: LM_EntityName
}