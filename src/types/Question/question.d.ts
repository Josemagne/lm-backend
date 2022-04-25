export type QuestionType = "BOOKCOLLECTION" | "BOOK" | "CHAPTERCOLLECTION" | "CHAPTER";

export declare interface LM_Question {
    question_id: string;
    questionType: QuestionType;
    question: string;
    bookCollection: string | undefined;
    book_id: string | undefined;
    chapterCollection: string | undefined;
    chapter: string | undefined;
    articleCollection: string | undefined;
}