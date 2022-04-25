export type FlashcardType = "BOOKCOLLECTION" | "BOOK" | "CHAPTERCOLLECTION" | "CHAPTER" | "ARTICLE" | "ANY";
export declare interface LM_Flashcard {
    flashcard_id: string;
    bookcollection_id: string | undefined;
    book_id: string | undefined;
    chaptercollection_id: string | undefined;
    chapter_id: string | undefined;
    articlecollection_id: string | undefined;
    article_id: string | undefined;
    flashcardType: FlashcardType;
    /**
     * HTML string with question
     */
    question: string;
    /**
     * HTML string with answer
     */
    answer: string;
}