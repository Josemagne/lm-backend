import { LM_Flashcard } from "../flashcards/flashcard";

export declare interface LM_ChapterFlashcard {
    flashcard_id: string;
    book_id: string;
    chapter_id: string;
    flashcard: LM_Flashcard;
}