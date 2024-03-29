export declare type FlashcardType = "BOOK" | "CHAPTER" | "SUBCHAPTER" | "ARTICLE";
export declare interface LM_Flashcard {
    flashcard_id: string;
    /**
     * HTML string with question
     */
    question: string;
    /**
     * HTML string with answer
     */
    answer: string;
}
