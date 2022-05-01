import LM_EntityName from "../Entity/entity"

export declare interface LM_Flashcard {
    flashcard_id: string;
    bookcollection_id: string | undefined;
    book_id: string | undefined;
    subchapter_id: string | undefined;
    chapter_id: string | undefined;
    articlecollection_id: string | undefined;
    article_id: string | undefined;
    flashcardType: LM_EntityName;
    /**
     * HTML string with question
     */
    question: string;
    /**
     * HTML string with answer
     */
    answer: string;
}
